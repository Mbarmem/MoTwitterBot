require('dotenv').config()
const Twit = require('twit')
const Discord = require('discord.js');
const client = new Discord.Client();


var T = new Twit({
  consumer_key:         process.env.TWITTER_API_KEY,
  consumer_secret:      process.env.TWITTER_API_SECRET,
  access_token:         process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
client.login(process.env.DISCORD_TOKEN);
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID1] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID1) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID1).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID2] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID2) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID2).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID3] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID3) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID3).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID4] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID4) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID4).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID5] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID5) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID5).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID6] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID6) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID6).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)
client.once('ready', () =>
  {
  var stream = T.stream('statuses/filter', { follow: [process.env.TWITTER_USER_ID7] })

  stream.on('tweet', function (tweet) {
    //only show owner tweets
    if(tweet.user.id == process.env.TWITTER_USER_ID7) {
    var url = "https://twitter.com/" + tweet.user.screen_name + "/status/" + tweet.id_str;
    try {
        let channel = client.channels.fetch(process.env.DISCORD_CHANNEL_ID7).then(channel => {
          channel.send(url)
        }).catch(err => {
          console.log(err)
        })
    } catch (error) {
            console.error(error);
      }
    }
  })
  }
)