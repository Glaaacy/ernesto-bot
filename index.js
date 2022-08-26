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

