const Discord = require("discord.js");
const PREFIX = "!="

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)
//why I cant make this help to work???????????????? IDK CUZ ITS RETARDET!!!
      if(args[0] == "Gfidts6653HsixVs_jeiHeb"){
        message.reply("please check your dms");
            message.author.send({embed: {
                  color: RANDOM,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: "Verified!",
                        value: "This key was redeemed successfully! This key was for: VIP",
                    },

              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "GodBot™ | Made by JustNela#8752 | v3.4-Alpha",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "GodBot verification key!",
                    }
              }});
            return;
          
        };
};
module.exports.help = {
  name: "verify-key"
}
