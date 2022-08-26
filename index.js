const Discord =require('discord.js'),
    bot = new Discord.Client({
        fetchAllMembers: true
    }),
    fs = require('fs')
const prefix =  "*"
const queue = new Map();


bot.login(process.env.token)


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity('Léchouille.');
});



bot.on('message', message => {
  if (message.content.startsWith('*setgame')) {
      if (message.author.bot) return;
      const acti = message.content.slice(8).trim();
      message.delete()
      bot.user.setActivity(acti)
  }
});




  bot.on('message', message => {
    if (message.content === `°00O°`) {
      message.delete()
      message.channel.send(exampleEmbed);
    }
  });


  bot.on('message', message => {
    if (message.content === `*ua`) {
      message.delete()
      message.channel.send("Oui");
    }
  });


  bot.on('message', message => {
    const channel = bot.channels.cache.get("969220543234580480");
      if (message.content === 'allj') {
        message.delete()
        channel.join()
      }
    });

    bot.on('message', message => {
      const channel = bot.channels.cache.get("969220543234580480");
        if (message.content === 'allq') {
          message.delete()
          channel.leave()
        }
      });


  bot.on('message', message => {
    if (message.content === `*di`) {
      let admin = message.guild.roles.cache.get("969220999943979018");
      const SayMessage = message.content.slice(4).trim();
      if (message.member.roles.cache.has(admin.id)) {
        message.channel.send(SayMessage);
      }
      
      else {
        message.channel.send(":x: ``Interdit``");
      }
      message.delete()
    }
  });


  bot.once("reconnecting", () => {
    console.log("Reconnecting!");
  });
  
  bot.once("disconnect", () => {
    console.log("Disconnect!");
  });
  
  bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`${prefix}play`)) {
      execute(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}skip`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
      stop(message, serverQueue);
      return;
    } else {
      message.channel.send("You need to enter a valid command!");
    }
  });
  
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.bot.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
      title: songInfo.title,
      url: songInfo.video_url
    };
  
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }
  

