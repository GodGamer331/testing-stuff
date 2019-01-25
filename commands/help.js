const Discord = require("discord.js");
const PREFIX = "god."

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
      message.delete(1)
//why I cant make this help to work???????????????? IDK CUZ ITS RETARDET!!!
      if(args[0] == "1"){
        message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 2221974,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                    {
                        name: "god.avatar",
                        value: "Usage: >avatar | >avatar <@mention>",
                    },
                    {
                        name: "god.my-id",
                        value: "Will grab your ID.",
                    },
                    {
                        name: "god.8ball",
                        value: "Usage: god.8ball <Question>",
                    },
                    {
                        name: "god.ping",
                        value: "Will show you StrandBOT's current ping.",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "© StrandBot",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "GodBot | Did you knew that owner is a Female gender?",
                    }
              }})};
            return;
}

module.exports.conf = {
    aliases: ['h', 'halp']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "help"

}
