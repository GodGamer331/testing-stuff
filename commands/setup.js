const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("Things you need to run this bot.")
   .addField("logs", "Create a ``logs`` channel for bot to log his actions. (warns etc.)")
   .addField("Mod role", "Create role ``Moderator`` for moderator role.")
   .addField("Admin role", "Create role ``Administrator``.")
   .addField("Yo run help command:", "!=help <index [1/2...]>")
   .addField("How to setup giveaway:", "!=giveaway\n Bot: Un wich channel? \n<channel> [channel must be without #] \nBot: Lenght of giveaeay? \n <time in minutes> \nPrize? \n <any prize>");
   message.channel.send(embed)
   
}

module.exports.help = {
    name: "setup",
    aliases: []
}
