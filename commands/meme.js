const Discord = require("discord.js")
const PREFIX = "!="
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    
    let {body} = await superagent
    .get('https://api-to.get-a.life/meme');
    
    var embed = new Discord.RichEmbed()
    .setAuthor("MEME!!")
    .setImage(body.url);
    
    message.channel.send(embed)
    
//module.exports.conf = {
 //   aliases: ['memes']
//};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "meme"

}
//Is anyone reading this?
