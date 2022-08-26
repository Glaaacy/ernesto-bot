const Discord =require('discord.js'),
    bot = new Discord.Client({
        fetchAllMembers: true
    }),
    fs = require('fs')


bot.login(process.env.token)


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity('Léchouille.');
});


bot.on('message', message => {
  if (message.content.startsWith('*di')) {
      if (message.author.bot) return;
      const SayMessage = message.content.slice(4).trim();
      message.delete()
      message.channel.send(SayMessage)
  }
});


  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ffffff')
	.setTitle('CHAT DE MERDE')
	.setAuthor(`MT KI`, '')
	.setDescription(`Ta demandé une insulte : espèce de connasse`)
	.setFooter('Moi même');



  bot.on('message', message => {
    if (message.content === `°00O°`) {
      message.delete()
      message.channel.send(exampleEmbed);
    }
  });


  bot.on('message', message => {
    if (message.content === `sddfghj`) {
      message.delete()
      message.channel.send("Bonne nuit !");
    }
  });


  bot.on('message', message => {
    if (message.startsWith("*test"))
    if (message.member.hasPermission("BAN_MEMBERS")) {
      message.delete()
      if (message.members.mentions.first()) {
          try {
             message.channel.send("Ok.")
          } catch {
            message.reply("Non.");
          }
      } else {
        message.reply(":x: ``Tu ne peux pas.``");
      }
  }
  });

