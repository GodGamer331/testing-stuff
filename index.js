const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//const colours = require("./colours.json");
//const superagent = require("superagent")


const ms = require("ms")


//const bot = new Discord.Client({disableEveryone: true});

//require("./util/eventHandler")(bot)

bot.on("ready", async () => {
  console.log("Ready!")
  
  bot.user.setActivity("All codes in commands.", {type: "STREAMING"});
});

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
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
    if(message.author.bot || message.channel.type === "dm") return;

    //let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    let prefix = prefixes[message.guild.id].prefixes;
    if(!prefixes[message.guild.id]){
      console.log(prefix)
      prefixes[message.guild.id] = {
        prefixes: botconfig.prefix
      }
    }
    //let prefix = prefixes[message.guild.id].prefixes;

    if(!message.content.startsWith(prefixes)) return;
    let commandfile = bot.commands.get(cmd.slice(prefixes.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefixes.length)))
    if(commandfile) commandfile.run(bot,message,args)

});


bot.login(process.env.token);
