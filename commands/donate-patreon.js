const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Donate me tought here", https://cdn.discordapp.com/avatars/216303189073461248/00a6db63b09480d1613877bf40e98bea.png?size=2048)
   .setColor("0xFFFF00")
   .addField("Donate tought Patreon?", "<:GWgodbotsupportPatreon:538702233714294814> [Patreon here](https://www.patreon.com/user?u=16811839)")
   .addField("Please Note:", "If you are not in Support server then screen that you bought that. or I wont belive you.")
   
   .setFooter("Patreons may have some exclusive features!")
}

module.exports.help = {
    name: "donate",
    aliases: []
}
