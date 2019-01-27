const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



     
    let embed = new Discord.RichEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription('**Use +buy <item> to buy!**')
    .addField(`Banana`, '`50$` \nGives you a nice banana :)')
    .addField(`CocaCola`, '`200$`\nGives you Fresh Coca-Cola!') // can add up to 25(I believe)
    .setColor("RANDOM") 

    message.channel.send(embed)



}
module.exports.help = {
    name: "shop",
    aliases: []
}
