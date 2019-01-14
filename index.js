const config = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs");

bot.on("ready", async() => {
  console.log("Bot je ready!")
  bot.user.setActivity("Codes in commands!", {type: "STREAMING"})
})

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("/commands/", (err, files) => {

  if(err) console.log(err)
  
  let jsfile = files.filter(f => f.split(".").pop === "js")
  if(jsfile.lenght <= 0) {
     return console.log("[LOGS] Couldnt find command!");
     
     }
  
   jsfile.forEach((f, i) => {
       let pull = require(`./commands/${f}`)
       bot.commands.set(pull.config.name, pull);
       pull.config.aliases1.forEach(alias => {
           bot.aliases.set(alias, pull.config.name)
    
      });
   });
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.lenght)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.lenght)))
  if(commandfile) commandfile.run(bot,message,args)
})

bot.login(process.env.token);
