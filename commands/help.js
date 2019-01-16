const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let embed = new Discord.RichEmbed()
   .setAuthor("Help Message", message.author.avatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("test.warn", "Warns a user.")
   .addFi3ld("test.my id", "Shows your ID")
   .addField("test.ping", "Shows Bots ping. [test](https://www.roblox.com/Groups/Group.aspx?gid=4486243)")
   .setDescription("test.help \n Shows this command!");
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: []
}
