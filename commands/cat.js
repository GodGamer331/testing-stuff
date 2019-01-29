const Discord = require("discord.js");
const randompuppy = require('random-puppy');


module.exports.run = async (bot, message, args) => {
 

    let api = "cats"
      randompuppy(api).then(api => {
           const theirembed = new Discord.RichEmbed()
	    .setAuthor("🐈 Cat")
            .setColor(0xff9000)
            .setImage(api)
            .setFooter("God Bot")
            .setTimestamp();
      message.channel.send(theirembed)
      })
     }
   

 module.exports.help = {
           name: 'cat'	
}    
