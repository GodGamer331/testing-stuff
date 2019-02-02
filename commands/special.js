const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Special Thanks!")
   .addField("lepax_", "Special thanks to lepax_. If he wouldnt join this project I wouldnt have great commands! ;)")
   .addField("JustNela", "JutNela is a main developer of this bot! for better support try asking her!")
   .setThumbnail(message.author.avatarURL)
   .setColor("GREEN")
   .setFooter("Bot version: v3.3-alpha")
   .setTimestamp();
   message.channel.send(embed)
}

module.exports.help = {
    name: "special-thanks",
    aliases: []
}
