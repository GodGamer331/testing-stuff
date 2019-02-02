const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not enought permissions! Permission needed: {MANAGE_MESSAGES}");
   if(!args[0]) return message.channel.send("Usage: ``!=poll <question>``");
   var embed = new Discord.RichEmbed()
   .setAuhor("New poll!", message.author.avatarURL)
   .setColor([212, 244, 2])
   .setDescription(args.join(" ") + "\n👍 Yes/ok \n👎 No")
   .addField("Poll created by:", message.author.username);
   let msg = message.channel.send(embed);
   
   await msg.react('👍');
   await msg.react('👎,);
   
   msg.delete({timeout: 1000});
}

module.exports.help = {
    name: "poll",
    aliases: []
}
