const Agent = require('socks5-https-client/lib/Agent');
const axios = require('axios');
const cheerio = require('cheerio');

const agent = new Agent({
  socksHost: '50.62.59.61',
  socksPort: '62705'
});

async function main() {
  const response = await axios.get('https://t.me/s/codex_team', {
    httpsAgent: agent
  });
  const $ = cheerio.load(response.data);
  const lastPostTimestamp = $('time').last().attr('datetime');
  const date = new Date(lastPostTimestamp);
  const currentDate = new Date();

  if (currentDate - date > 1000 * 60 * 60 * 24 * 7) {
    await axios({
      method: 'post',
      url: '',
      data: 'message=Hello world'
    });
  }
}

main();
