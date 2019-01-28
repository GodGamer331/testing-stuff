const Discord = require("discord.js");
const PREFIX = "!="

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
                        name: "Prefix:",
                        value: "!=",
                    },
                    {
                        name: "!=avatar",
                        value: "Usage: #avatar | #avatar <@mention>",
                    },
                    
                    
                    {
                        name: "!=my-id",
                        value: "Will grab your ID.",
                    },
                    {
                        name: "!=8ball",
                        value: "Usage: god.8ball <Question>",
                    },
                    {
                        name: "!=ping",
                        value: "Will show you God Bot's current ping.",
                    },
                    {
                        name: "!=support",
                        value: "Gives a link to our support server.",
                    },
                    {
                        name: "!=donate",
                        value: "Donate me tought Patreon ;)",
                    },
                    {
                        name: "!=help 2",
                        value: "Shows 2nd page of help.",
                    },
              ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "GodBot™ | Made by JustNela#8752",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "GodBot | Help Page: 1",
                    }
              }});
            return;
        };

        if(args[0] == "2"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                            name: "My prefix is:",
                            value: "!=",
                        },
                        {
                            name: "meme",
                            value: "Shows a funny meme!",
                        },
                        {
                            name: "balance",
                            value: "Aliases: bal, money. Shows your balance!",
                        }
                      ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "GodBot™ | Made by JustNela#8752 | page 2",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "GodBot | help and fun!",
                    },
              }})};
           return;
       

       let staff = message.member.roles.find("name", "¢=[BOT DEVELOPER]=¢");
       if(!staff) return message.reply("You are not Developer!");
       
       if(args[0] == "dev"){
            message.reply("please check your dms for the commands!");
            message.author.send({embed: {
                  color: 1339135,
                  thumbnail: {
                      url: (message.author.displayAvatarURL)
                    },
                  fields: [
                        {
                            name: "prefix:",
                            value: "!=",
                        },
                        {
                            name: "!=log",
                            value: "Makes a update log!",
                        },
                      ],
                timestamp: new Date(),
                  footer: {
                    icon_url: bot.user.displayAvatarURL ,
                    text: "GodBot™ | Made by JustNela#8752 | page ???",
                  },
                  author: {
                      icon_url: message.guild.iconURL,
                      name: "GodBot | Developer help!",
                    },
              }})};
           return;

                
                 
                   
                 
          
            

};
//module.exports.conf = {
  //aliases: ['h', 'halp']
//};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "help"

}
