const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
   .setAuthor("Help Message", message.author.avatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .setDescription("test.help \n Shows this command!")
   message.channel.send(embed)
}

module.exports.config = {
    name: "help",
    aliases: []
}
