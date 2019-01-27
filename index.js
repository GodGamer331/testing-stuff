const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
//const superagent = require("superagent")

//JSON files
let userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

require("./util/eventHandler")(bot)

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



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let sender = message.author;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let modR = "Moderator";
  let adminR = "Administrator";
  let args = messageArray.slice(1);
  //let prefix = botconfig.prefix;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
  if(!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
  if(!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 500;
  if(!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = "Not Collected!";
  
  
  fs.writeFile('Storage/userData', JSON.stringify(userData), (err) => {
    if(err) console.log(err)
  })
  
  
  if(cmd === `${prefix}money` || cmd === `${prefix}balance` || cmd === `${prefix}bal`) {
    var embed = new Discord.RichEmbed()
    .setAuthor("Bank Balance", message.author.avatarURL)
    .setColor("GREEN")
    .addField("Account Owner:", message.author.username, true)
    .addField("Account Balance:", userData[sender.id + message.guild.id].money, true)
    .setTimestamp()
    .setFooter("JustNela made this bot ;) | Economy version: vPre-alpha0.5");
    message.channel.send(embed);
    return;
  }
  if(cmd === `${prefix}daily` || cmd === `${prefix}d`) {
    if(userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
      userData[sender.id + message.guild.id].lastDaily = moment().format('L')
      userData[sender.id + message.guild.id].money += 250;
      message.channel.send({embed:{
        author: "Daily Reward",
        description: "You successfully claimed your daily _**250$**_!",
        color: 0xf4c842,
        
      }})
    } else {
      message.channel.send({embed:{
        author: "Daily Reward!",
        description: "You already claimed your Daily reward!",
        color: 0xf44259,
      }})
    }
      
  }
  

  fs.writeFile('Storage/userData', JSON.stringify(userData), (err) => {
    if(err) console.log(err)
  })
  
 //WUTF IS DAT THING
});
bot.login(process.env.token);
//No one is reading this.. if so then Hi.
