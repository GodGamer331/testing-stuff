const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let replis = ["Yes", "No", "Probably Yes", "Probably No", "Maybe", "Ask another one."]
   if(!args[2]) return message.reply("Ask a question that have 2 words!");
   let answ = Math.floor((Math.random() * replis.lenght));
   let Q = args.slice(1).join(" ");
   
   var embed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setDescription(`Your Question was: ${Q} \n ${answ}`);
  
   message.channel.send(embed)
}

module.exports.help = {
    name: "8ball",
    aliases: []
}
