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
  if (message.content.startsWith('*setgame')) {
      if (message.author.bot) return;
      const acti = message.content.slice(8).trim();
      message.delete()
      bot.user.setActivity(acti)
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
  let admin = message.guild.roles.cache.get("969220999943979018");
  const SayMessage = message.content.slice(4).trim();
    if (message.content === `*di`) {
      if (message.author.bot) return;
      if (message.member.roles.cache.has(admin.id)) {
        message.channel.send(SayMessage);
      }
      
      else {
        message.channel.send(":x: ``Interdit``");
      }
      message.delete()
    }
  });

  