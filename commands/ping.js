const Discord = require("discord.js"); // Defining Discord

module.exports.run = async (client, message, args) => { // Command Handler Module Code
// const m = await message.channel.send("Ping?");

let E = new Discord.RichEmbed() // Start of embed
.setTitle("Pong! :stopwatch:") // Embed Title
.addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`) // Shows Latency
.addField("API Latency", `${Math.round(client.ping)}ms`) // Shows API Latency

message.channel.send(E) // Sending the embed

  }

module exports.help = {
    name: 'ping',
    aliases: []
}

