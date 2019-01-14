const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
   .setAuthor("Help Message", ${message.author.avatarURL})
   .setColor("GREEN")
   .setTimestamp()
   .addBlankField("Test")
   message.channel.send(embed)
}

module.export.config = {
  name: "help",
  aliases: ["helo", "hrlp"]
}
