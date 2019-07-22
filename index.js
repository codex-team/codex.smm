const Agent = require('socks5-https-client/lib/Agent');
const axios = require('axios');
const cheerio = require('cheerio');
const {
  FIRST_TIME_MESSAGES,
  EVIL_EMOJI,
  SAD_EMOJI,
  RANDOM_EMOJI
} = require('./messages');
const utils = require('./utils');

require('dotenv').config();

const agent = new Agent({
  socksHost: process.env.SOCKS_HOST,
  socksPort: process.env.SOCKS_PORT
});

/**
 * Parse channel link and sends notify if long time there were no posts
 */
async function main() {
  const response = await axios.get(process.env.CHANNEL_TO_LOOKUP_URL, {
    httpsAgent: agent
  });

  /**
   * Get timestamp of the last post
   */
  const $ = cheerio.load(response.data);
  const lastPostTimestamp = $('time').last().attr('datetime');
  const lastPostDate = new Date(lastPostTimestamp);

  // Count of days in milliseconds
  const daysWithoutPosts = 1000 * 60 * 60 * 24 * process.env.DAYS_WITHOUT_POSTS;
  const currentDate = new Date();

  if (currentDate - lastPostDate > daysWithoutPosts) {
    const params = {
      daysCount: (currentDate - lastPostDate) / (1000 * 60 * 60 * 24),
      EVIL_EMOJI: utils.getRandomElement(EVIL_EMOJI),
      RANDOM_EMOJI: utils.getRandomElement(RANDOM_EMOJI),
      SAD_EMOJI: utils.getRandomElement(SAD_EMOJI)
    };

    await sendNotify(params);
  }
}

async function sendNotify(params1) {
  const params = {
    daysCount: 3,
    EVIL_EMOJI: utils.getRandomElement(EVIL_EMOJI),
    RANDOM_EMOJI: utils.getRandomElement(RANDOM_EMOJI),
    SAD_EMOJI: utils.getRandomElement(SAD_EMOJI)
  };
  const messageTemplate = utils.getRandomElement(FIRST_TIME_MESSAGES);

  if (typeof messageTemplate === 'string') {
    await postMessage(messageTemplate, params);
  } else {
    await utils.asyncForEach(messageTemplate, async template => {
      if (typeof template === 'string') {
        await postMessage(template, params);
      } else {
        await utils.sleep(template.timeout);
        await postMessage(template.message, params);
      }
    });
  }
}

async function postMessage(message, params) {
  await axios({
    method: 'post',
    url: process.env.NOTIFY_URL,
    data: 'message=' + utils.compileString(message, params)
  });
}

sendNotify();
