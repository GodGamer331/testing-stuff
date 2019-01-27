const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const ms = require("ms");

//const superagent = require("superagent")

//JSON files
let userData = JSON.parse(fs.readFileSync('./Storage/userData.json', 'utf8'));

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
  
  let money = db.fetch(`money_${message.guild.id}_${message.author.id}`);
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
  
  if(cmd === `${prefix}bal` || cmd === `${prefix}balance`) {
    

    if (money === null) money = 0;

    message.channel.send({embed:{
        color: 0x42f48c,
        fields: [
            {
                name: "Account Owner",
                value: message.author.username,
               
            },
            {
                name: "Account Balance:",
                value: bal,
            },
        ],
        author: {
            icon_url: message.author.avatarURL,
            text: "Bank Vault!"
        }
            
    }})
      
    


};
 
 //WUTF IS DAT THING
});
bot.login(process.env.token);
//No one is reading this.. if so then Hi.
