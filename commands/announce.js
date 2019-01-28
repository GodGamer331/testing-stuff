const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let aUser = message.author.username
   let reason = args.join(" ").slice(22);
   let(!reason) return message.reply("Please specify a update!");
   let staff = message.member.roles.find("name", "¢=[BOT DEVELOPER]=¢");
   if(!staff) return message.reply("You do not have enought Permissions!");
   
   var embed = new Discord.RichEmbed()
   .setAuthor("New Update", message.author.avatarURL)
   .setDescription( reason )
   .setColor("GREEN")
   .addField("Developer:", aUser);
   //let Achannel = 
   let Achannel = message.guild.channels.find(`name`, "bot-updates");
   Achannel.send(embed)
}

module.exports.help = {
    name: "update-log",
    aliases: []
}
