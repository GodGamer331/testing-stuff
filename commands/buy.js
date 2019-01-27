const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {


    let author = db.fetch(`money_${message.author.id}`)

    if (args[0] == 'banana') {
        if (!message.guild.roles.find("name", 'BANANA')) return message.channel.send('I could not find a role by the name of `BANANA`, check with the owners.')
        if (author < 50) return message.channel.send('You need atleast `50$` to purchase the moderator role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'BANANA'))

        db.subtract(`money_${message.author.id}`, 50)
        message.channel.send(message.author.tag + ' You successfully bought the BANANA role for `50$`')
    } else if(args[0] == 'cocacola') {
        if (!message.guild.roles.find("name", 'Coca-Cola')) return message.channel.send('I could not find a role by the name of `Coca-Cola`, check with the owners.')
        if (author < 200) return message.channel.send('You need atleast `200$` to purchase Coca-Cola.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Coca-Cola')) // get the role & add it

        db.subtract(`money_${message.author.id}`, 200)
        message.channel.send(message.author.tag + ' You successfully bought the Coca-Cola role for `200$`')
    }





}
module.exports.help = {
    name: "buy",
    aliases: []
}
