const Discord = require("discord.js")


exports.run = async (client, message, args, color) => {

    let start = Date.now();
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        var embed = new Discord.RichEmbed()
        .setTitle(`🔔 Pong!`)
        .setColor("RANDOM")
        .addField("📶 Latency", `${diff}ms`, true)
        .addField("💻 API", `${API}ms`, true)
        .setFooter("Developer: JustNela#8752")
        message.edit(embed);
      
   }



exports.help = {
    name: 'ping',
    aliases: []
}
