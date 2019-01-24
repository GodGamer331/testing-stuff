const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const PREFIX = "god."

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;

    let staff = message.member.roles.find("name", "Helper ✊") || message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊");
  if(!message.member.roles.has(staff.id)) return message.reply("You are not a staff member.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  console.log(wUser)
  if(!wUser) return message.reply("Couldn't find that user");
  
  let warnlevel = warns[wUser.id].warns;
  if(!warnlevel) return message.reply("User doesn't have any warnings.")

  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.conf = {
    aliases: ['wl', 'warnings']
};

module.exports.help = {
  name: "warnlevel"
}


