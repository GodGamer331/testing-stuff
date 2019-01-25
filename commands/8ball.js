const Discord = require("discord.js");
const PREFIX = "god."

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
        message.reply("Usage: >8ball <question>");
        return;
    };

            if (args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.send("Sorry, Please ask another question.");
}

module.exports.conf = {
    aliases: ['eight-ball', 'eightball', '8-ball', '8 ball', 'eight ball', 'magic ball']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "8ball"

} 
