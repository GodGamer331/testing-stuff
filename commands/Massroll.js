const Discord = require("discord.js");
const PREFIX = "!="

var fortunes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "0",
    "-1",
];
var fortunes1 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "0",
    "-1",
];
var fortunes2 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "0",
    "-1",
];
var fortunes3 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "0",
    "-1",
];
var fortunes4 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "0",
    "-1",
];

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: !=massroll");
        return;
    };
            //let question = args.join(" ").slice(22);
            var embed = new Discord.RichEmbed()
            .setTitle("Magic 8Ball!")
            .setDescription("You rolled " + fortunes[Math.floor(Math.random() * fortunes.length)] + ", " + fortunes1[Math.floor(Math.random() * fortunes1.length)] + ", " + fortunes2[Math.floor(Math.random() * fortunes2.length)] + ", " + fortunes3[Math.floor(Math.random() * fortunes3.length)] + ", " + fortunes4[Math.floor(Math.random() * fortunes4.length)])
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
    name: "massroll"

} 
