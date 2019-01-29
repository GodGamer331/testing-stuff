const Botconfig = require("../botconfig.json");
const superagent = require("superagent");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {


    if (!message.channel.nsfw) 
          return message.channel.send("Please use this command in channels that are marked as NSFW!");
        superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
                const lewdembed = new Discord.RichEmbed()
                    .setTitle(`Hentai`)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setFooter("God Bot", bot.user.displayAvatarURL)
                    .setTimestamp();
                message.channel.send(lewdembed);
            })

module.exports.help = {
    name: "hentai",
    aliases: []
}
