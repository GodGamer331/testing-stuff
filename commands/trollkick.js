const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   if (message.content === '!=test' || message.content === '!=t'){
   var embed = new Discord.RichEmbed()
   .setAuthor("You got trolled!")
   .setColor("RED")
   .setDescription("Lol you really thinked I misspelled that? No I didnt :D \n You cant kick anyone!");
   message.chsnnel.send(embed)
   }
}

//module.exports.help = {
    //name: "kik",
    //aliases: []
//}
