const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {
 
 
	    if (!message.channel.nsfw) return message.channel.send("Please use this command in channels that are marked as NSFW!");
         // return 
        randomPuppy.get('https://nekobot.xyz/api/image?type=pussy')
            .end((err, response) => {
                var lewdembed = new Discord.RichEmbed()
                    .setTitle(`Pussy`)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setFooter("God Bot", bot.user.displayAvatarURL)
                    .setTimestamp();
                message.channel.send(lewdembed);
            });
    
}
 
 module.exports.help = {
           name: 'pussy1';
} 
