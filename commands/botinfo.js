exports.run = (client, message, args) => {
    const moment = require('moment')
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField('👾 Owner', client.users.get(client.owner), true)
    .addField('✏ Name', client.user.username, true)
    .addField('📆 Created At', moment(client.user.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField('💻 Latency', Math.floor(client.ping), true)
    .addField('🛡 Discord.js', `v${Discord.version}`, true)
    .setFooter('Developer: JustNela#8752')
    .setColor('RANDOM')
    message.channel.send(embed)
}
exports.help = {
    name: 'botinfo',
    aliases: []
}
