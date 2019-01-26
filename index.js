const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
//const superagent = require("superagent")

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
 
  
    
    let statuses = [
    
      
      `in ${bot.guilds.size} servers`,
      "my prefix is !=",
      "!=help 1 for start!",
      `over ${bot.users.size} users!`,
      "to my patreons on patreon"
    ]
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.lenght)];
    bot.user.setActivity(status, {type: "LISTENING"});
    bot.user.setStatus("dnd");
  }, 5000)
  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
 // if(message.content === `${prefix}update`);
 // var embed = new Discord.RichEmbed()
  //.setAuthor("New Update!")
//.addField("Changed prefix to:", "!=")
 // .addField("Added avatar command", "Use: !=avatar (player)")
 // .setColor("GREEN")
//.setFooter("v1.6.1 | Made by {^=^}DEVELOPER{^=^}")
 // .setTimestamp();
  //let tchannel = message.guild.channels.find(`name`, "bot-updates");
 //message.channel.send(embed)
//  return;
  

 //WUTF IS DAT THING
});
bot.login(process.env.token);
//No one is reading this.. if so then Hi.
