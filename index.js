const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const ms = require("ms");
const client = new Discord.Client();
const Enmap = require('enmap');

client.warns = new Enmap({name: "warns"});
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
  
  let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`);
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
    

    if (bal === null) bal = 0;
   // let user = message.author || 
    message.channel.send("You have balance of " + bal)
      //  color: 0x42f48c,
       // fields: [
          //  {
           //     name: "Account Owner",
              //  value: message.author.username,
               
         //   },
          //  {
           //     name: "Account Balance:",
            //    value: bal,
          //  },
       // ],
     //   author: {
     //       icon_url: message.author.avatarURL,
          //  text: "Bank Vault!"
      //  }
            
 //   }})
      
    


};
 if (cmd === `${prefix}daily` || cmd === `${prefix}d`) {
 let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`You already collected ur daily reward, you can come back and collect it in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setAuthor(`Daily`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`**Daily Reward**`)
    .addField(`Collected`, amount)

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

  }
  if (cmd === `${prefix}addmoney` || cmd === `${prefix}am`) {
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      message.reply("Sorry You ran out of permissions!")
    }
    if(!args[0]) return message.reply("Please specify a amount!")
    if(isNaN(args[0])) return message.reply("Please specify it in numbers.....")
    
    message.channel.send('Succesfully added!')
    db.add(`money_{message.guild.id}_{message.author.id}`, args[0])
                            
  }
 
 // if (message.content === `${prefix}hentai`) {
      
//} 
	
  
 //WUTF IS DAT THING
});
bot.login(process.env.token);
//No one is reading this.. if so then Hi.
