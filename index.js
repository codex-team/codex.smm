const shttps = require('socks5-https-client');

shttps.get({
    hostname: 't.me',
    path: '/s/codex_team',
    rejectUnauthorized: false,
    socksHost: '50.62.59.61',
    socksPort: '62705',
}, function(res) {
    res.setEncoding('utf8');
    res.on('readable', function() {
        console.log(res.read()); // Log response to console.
    });
});
