const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;



    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('📶 Latency:', Math.floor(botping) + 'ms')
        .addField('💻 API : ', Math.floor(bot.ping) + 'ms')
        .setTimestamp(new Date())
        .setFooter("Developer: JustNela#8752")
        


        
    return message.channel.send(pingembed);
        

};

module.exports.help = {
    name: "ping",
    aliases: []
}
