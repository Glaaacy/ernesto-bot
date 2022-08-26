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


  bot.on('message', message => {
    const channel = bot.channels.cache.get("898265244147798056");
      if (message.content === 'allj') {
        message.delete()
        channel.join()
      }
    });

    bot.on('message', message => {
      const channel = bot.channels.cache.get("898265244147798056");
        if (message.content === 'allq') {
          message.delete()
          channel.leave()
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

