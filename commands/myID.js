const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setThumbnail(message.author.avatarURL)
   .setDescription(`Your ID is ${message.author.id}`)
   .setAuthor(message.author.username);
   message.channel.send(embed)
}

module.exports.help = {
    name: "my-id",
    aliases: []
}
