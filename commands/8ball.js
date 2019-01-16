const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let replis = ["https://cdn.discordapp.com/attachments/527514373158207509/535106507826659342/IMG_20190116_153816.jpg", "https://cdn.discordapp.com/attachments/527514373158207509/535106508367593472/IMG_20190116_153853.jpg","https://cdn.discordapp.com/attachments/527514373158207509/535106508825034791/IMG_20190116_153921.jpg", "https://cdn.discordapp.com/attachments/527514373158207509/535106507377999893/IMG_20190116_154027.jpg", "https://cdn.discordapp.com/attachments/527514373158207509/535106507826659340/IMG_20190116_153952.jpg"]
   if(!args[2]) return message.reply("Ask a question that have 2 words!");
   let answ = Math.floor((Math.random() * replis.lenght));
   let Q = args.slice(1).join(" ");
   
   var embed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setDescription(`Your Question was: ${Q}`)
   .setImage(answ);
   message.send(embed)
}

module.exports.help = {
    name: "8ball",
    aliases: ["eightball", "8-ball", "eight-ball"]
}
