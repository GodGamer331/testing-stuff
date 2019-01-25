
const Discord = require("discord.js");
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Usage: >findusers <keyword>");
        return;
    };

    //WRITE CODE BELOW HERE
    let staff = message.member.roles.find("name", ")(-Bot Manager-)("); // || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊") || message.member.roles.find("name", "𝓞𝔀𝓷𝓮𝓻 💪");
  if(!message.member.roles.has(staff.id)) return message.reply("You are not a staff member.");
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please provide a search term.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));

    message.channel.send(matches.map(u => u.tag).join(", "));
}

module.exports.conf = {
    aliases: ['fu']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "findusers"

} 
