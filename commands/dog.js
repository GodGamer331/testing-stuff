const randomnsfw = require('random-puppy');

module.exports.run = async (bot, message, args) => {
 

    let api = "dogs"
      randompuppy(api).then(api => {
           const theirembed = new Discord.RichEmbed()
	    .setAuthor("Dog 🐕 ")
            .setColor(0xff9000)
            .setImage(api)
            .setFooter("God Bot", reddit)  
            .setTimestamp();
      message.channel.send(theirembed)
      })
     }
     
 module.exports.help = {
           name: 'cat'    
}    
