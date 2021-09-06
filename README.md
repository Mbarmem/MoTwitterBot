# Discord Twitter Bot

A discord bot that sends messages to a channel whenever a specific user tweets using the Twitter Streaming API. Uses the Twit and Discord.js NPM packages.

## Installation

### Local
1. Copy files into the VPS using command: `git clone https://github.com/Mbarmem/MoTwitterBot.git`
2. Add apt sources list for Nodejs 16 repo: `curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -`
3. Install Node.js: `sudo apt -y install nodejs`
4. Run `npm install`
6. Copy `example.env` to `.env` and edit info.
7. Run `node main.js`

---

### Docker

1. Build the docker image using the command: `docker build -t mbarmem/motwitterbot:latest .`
2. Push the docker image to repository: `docker image push mbarmem/motwitterbot:latest`

---