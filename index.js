const Agent = require('socks5-https-client/lib/Agent');
const axios = require('axios');

const agent = new Agent({
    socksHost: '50.62.59.61',
    socksPort: '62705'
})

async function main() {
    const response = await axios.get('https://t.me/s/codex_team',
        {
            httpsAgent: agent
        });
    console.log(response.data)
}

main();
