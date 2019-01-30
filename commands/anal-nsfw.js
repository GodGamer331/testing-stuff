const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {
 
 if(!message.channel.nsfw) return message.reply("Please use this command in channels that are marked as NSFW!");
 let imgur = [
               "analGif",
               "anal",
               "sexInAss"
  ]

let imgur1 = imgur[Math.floor(Math.random() * imgur.length)];

 message.channel.startTyping(); 

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'anal.png' 
                          }]           
                   }).then(() => message.channel.stopTyping()); 
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'anal', 
           aliases: ['tits']
} 
