const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

    message.channel.send({embed:{
        color: 0x42f48c,
        fields: [
            {
                name: "Account Owner",
                value: message.author.username,
               
            },
            {
                name: "Account Balance:",
                value: bal,
            },
        ],
        author: {
            icon_url: message.author.avatarURL,
            text: "Bank Vault!"
        }
            
    }})
      
    


}
module.exports.help = {
    name: "bal",
    aliases: []
}
