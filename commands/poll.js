const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args, tools) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not enought permissions! Permission needed: {MANAGE_MESSAGES}");
   if(!args[0]) return message.channel.send("Usage: ``!=poll <question>``");
   const embed = new Discord.RichEmbed()
   .setTitle("A Poll Has Been Started!")
   .setColor("#5599ff")
   .setDescription(args.join(" "))
   .setFooter(`Poll Started By: ${message.author.username}`, `${message.author.avatarURL}`)

   message.channel.send({embed})
   .then(msg => {
     msg.react('👍')
     msg.react('👎')
     msg.react('🤷')
   })
   .catch(() => console.error('Emoji failed to react.'));

}

module.exports.help = {
    name: "poll",
    aliases: []
}
