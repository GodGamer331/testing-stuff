const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   //
   let staff = message.member.roles.find("name", "Moderator") || message.member.roles.find("name", "Administrator") || message.member.roles.find("name", "Co-Owner") || message.member.roles.find("name", "Owner");
   if(!staff) return message.reply("You are not a Staff Member!");
   let reason = args.join(" ").slice(22);
   if(!reason) return message.reply("Please specify a reason!");
   let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   if(!wUser) return message.reply("Specify A User!");
  
   var embed = new Discord.RichEmbed()
   .setAuthor("Warn Announce")
   .setColor("RED")
   .setTimestamp()
   .addField("Warned User:", wUser)
   .addField("Moderator:", message.author.username)
   .addField("Reason:", reason);
   let wchannel = message.guild.channels.find(`name`, "logs");
   wchannel.send(embed)
   if(!wchannel) return message.reply("Pleaae setup a ``#logs`` channel.");
   
}

module.exports.help = {
    name: "oldwarn",
    aliases: []
}
