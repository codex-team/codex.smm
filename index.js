const Agent = require('socks5-https-client/lib/Agent');
const axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config();

const agent = new Agent({
  socksHost: process.env.SOCKS_HOST,
  socksPort: process.env.SOCKS_PORT
});

async function main() {
  const response = await axios.get(process.env.CHANNEL_TO_LOOKUP_URL, {
    httpsAgent: agent
  });
  const $ = cheerio.load(response.data);
  const lastPostTimestamp = $('time').last().attr('datetime');
  const date = new Date(lastPostTimestamp);
  const currentDate = new Date();
  const daysWithoutPosts = 1000 * 60 * 60 * 24 * process.env.DAYS_WITHOUT_POSTS;

  if (currentDate - date > daysWithoutPosts) {
    await axios({
      method: 'post',
      url: process.env.NOTIFY_URL,
      data: 'message=И почему так долго не было постов?'
    });
  }
}

main();
