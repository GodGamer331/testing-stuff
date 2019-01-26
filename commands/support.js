const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Support!", message.author.avatarURL)
   .addField("Discord:", "<:GWgodbotsupportDiscord:538702233634734090> [Invite](https://discord.gg/4DAZqsR)")
   .addField("Invite me:", "<:GWtestOnline:533904223872745482> [here](https://discordapp.com/api/oauth2/authorize?client_id=534122074579664896&permissions=8&scope=bot)")
   
   .setColor("0xf4eb42")
   .setThumbnail(message.author.avatatURL);
   message.channel.send(embed)
}

module.exports.help = {
    name: "support",
    aliases: []
}
