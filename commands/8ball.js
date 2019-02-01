const Discord = require("discord.js");
const PREFIX = "!="

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Definetly Not",
    "It's Possible",
    "Depends",
    "Not a chance",
];

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: !=8ball <question>");
        return;
    };
            let question = args.join(" ").slice(22);
            var embed = new Discord.RichEmbed()
            .setTitle("Magic 8Ball!")
            .setDescription("My Answer is: " + fortunes[Math.floor(Math.random() * fortunes.length)])
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
    name: "8ball"

} 
