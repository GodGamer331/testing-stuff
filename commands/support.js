const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Support!", message.author.avatarURL)
   .addField("Discord:", "[Invite](https://discord.gg/4DAZqsR)")
   .setColor("0xf4eb42")
   .setThumbnail(message.author.avatatURL);
   message.channel.send(embed)
}

module.exports.help = {
    name: "support",
    aliases: []
}
