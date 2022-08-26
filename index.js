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
  if (message.content.startsWith("*test"))
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
    let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if (!User) return message.channel.send("Invalid User")
    let banReason = args.join(" ").slice(22);
    if (!banReason) {
    banReason = "None"
    }
    User.kick({reason: banReason})
    const person = message.mentions.users.first()
    const embed = new discord.MessageEmbed()
        .setTitle(person.username + " got kicked by " + message.author.username)
        .setThumbnail("https://www.progressivecombatsystems.com/wp-content/uploads/2019/03/groin-kick.jpg")
    message.channel.send(embed)
});
