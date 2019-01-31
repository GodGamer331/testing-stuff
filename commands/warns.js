const Discord = require('discord.js');
exports.run = (client, message, args) => {

let user = message.author;
let tagged = message.guild.member(message.mentions.users.first());

if (!args[0]) {
	const key_s = `${message.guild.id}-${message.author.id}`;
	return message.channel.send({embed: { color: 0xFFFFFF, description: `You've been warned ${client.warns.get(key_s, "warns")} times.` } });
} else {
	const key_o = `${message.guild.id}-${tagged.id}`;
	client.warns.ensure(`${message.guild.id}-${tagged.id}`, {
      user: message.author.id,
      warns: 0
    });
	return message.channel.send({embed: { color: 0xFFFFFF, description: `This user has been warned ${client.warns.get(key_o, "warns")} times.` } });
}


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  category: 'Moderation',
  name: 'warns',
  description: 'Displays the warns of a user.',
  usage: 'warns <@user>'
};
