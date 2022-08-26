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
    bot.user.setActivity('Léchouille');
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
    if (message.content.startsWith()) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(4).trim();
        message.channel.send(SayMessage);
      message.delete()
    }
  });


  bot.on('message', message => {
    let admin = message.guild.roles.cache.get("969220999943979018");
    if (message.content.startsWith(`*di`)) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(4).trim();
  if (message.member.roles.cache.has(admin.id)) {
    message.channel.send(SayMessage);
    message.delete()
  }
  
  else {
    message.channel.send(":x: **Tu ne peux pas.**");
    message.delete()
  }
}});


bot.on('message', message => {
  let admin = message.guild.roles.cache.get("969220999943979018");
  if (message.content.startsWith(`*setgame`)) {
    if (message.author.bot) return;
    const acti = message.content.slice(8).trim();
if (message.member.roles.cache.has(admin.id)) {
      message.delete()
      bot.user.setActivity(acti)
      message.reply("Je joue maintenant à : " + "**" + acti + "**")
}

else {
  message.channel.send(":x: **Tu ne peux pas.**");
  message.delete()
}
}});


