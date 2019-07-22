# codex.smm
SMM assistant. Reminds you to write something to you followers.

## Setup
- Install dependencies `yarn install --prod`
- Rename `.env.sample` into `.env` and fill necessary fields

## Execute on schedule
You can use `crontab` utility to execute script on schedule.
To setup it you can use [crontab.guru](https://crontab.guru/).
Configuration example: 
```
29 13-20 * * 1-5 /usr/bin/node /root/codex.smm/index.js
```
It means that script will be executed at minute 29 past every hour from 13 through 20 on every day-of-week from Monday through Friday.
