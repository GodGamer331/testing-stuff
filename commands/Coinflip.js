const Discord = require("discord.js");
const PREFIX = "!="

var fortunes = [
    "tails",
    "head"

];

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: !=coinflip");
        return;
    };
            //let question = args.join(" ").slice(22);
            var embed = new Discord.RichEmbed()
            .setTitle("Magic 8Ball!")
            .setDescription("You flipped coin! " + fortunes[Math.floor(Math.random() * fortunes.length)] + " have dorpped!)
           // .addField("Question:", `${question}`)
           // .addField("Answer:", `${fortunes[Math.floor(Math.random() * fortunes.length)]}`)
            .setColor("GREEN");
            message.channel.send(embed)
            //if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
           // else message.channel.send("Sorry, Please ask another question.");
}

module.exports.conf = {
    aliases: ['eight-ball', 'eightball', '8-ball', '8 ball', 'eight ball', 'magic ball']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "coinflip"

} 
