const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var embed = new Discord.RichEmbed()
  .setAuthor("Bot made by: JustNela#6666")
  .setThumbnail(message.author.avatarURL)
  .addField("Ping!", ":ping_pong: **Pong!**");
  message.channel.send(embed)
}
//lol
module.exports.help = {
  name: "ping",
  aliases: []
}
