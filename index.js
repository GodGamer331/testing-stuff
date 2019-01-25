const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const PREFIX = config.prefix;
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;
const moment = require('moment');

bot.on("ready", function() {
  console.log(
  "Starting StrandBOT:\n\nNode version:  " + process.version + 
  "\nDiscord.js version: " + Discord.version + 
  "\nStrandBOT version: " + "1.0.2" +
  "\nFFMPEG version: " + "4.0.1" + 
  "\nCommand Ammount: " + "47 / 47" + 
  "\nCreator: " + "Connor | Strand" + 
  "\nLangauge: " + "Javascript"
  );
});

// COMMAND HANDLER
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    
      if(err) console.log(err);
    
      let jsfile = files.filter(f => f.split(".").pop() === "js")
      if(jsfile.length <= 0){
        console.log("[StrandBot Log] Couldn't find commands.");
        return;
      }
    
      jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name);
        });
        
      });
     // console.log(`[StrandBot Log] 47 / 47 commands successfully loaded!`);
    });

  
    bot.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
    
      let prefix = config.prefix;
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);
      // let command = messageArray[0];
    
      // let commandfile = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
      // if(commandfile) commandfile.run(bot,message,args);

      let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
      if(commandfile) commandfile.run(bot,message,args);


        let xpAdd = Math.floor(Math.random() * 7) + 1;
      
        if(!xp[message.author.id]){
          xp[message.author.id] = {
            xp: 0,
            level: 1
          };
        }
      
      
        let curxp = xp[message.author.id].xp;
        let curlvl = xp[message.author.id].level;
        let nxtLvl = xp[message.author.id].level * 300;
        xp[message.author.id].xp =  curxp + xpAdd;
        if(nxtLvl <= xp[message.author.id].xp){
          xp[message.author.id].level = curlvl + 1;

          message.channel.send("Congratulations " + message.author + ", you've just leveled up to **" + (curlvl + 1) +"** !" )
        }
        fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
          if(err) console.log(err)
        });

        if(!message.content.startsWith(PREFIX)) return;
        if(cooldown.has(message.author.id)){
          message.delete();
          return message.reply("You have to wait 5 seconds between commands.")
        }
        if(!message.member.hasPermission("ADMINISTRATOR")){
          cooldown.add(message.author.id);
        }

        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdseconds * 5000)


      
});


bot.on("ready", () => {
    bot.user.setPresence({ game: { name: "All commands, type: 3 } });
})

bot.on("message", async message => {
  const swearWords = ["niga", "nigga", "nigs", "hoe", "whore", "slut"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.delete(1);
  message.reply(" mind your profanity!");
}

let regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/ig.test(message.cleanContent);
if(regex) { 
    message.delete().catch(console.error).then(() => message.reply(' please do not advertise other Discord servers.').then(m => m.delete(10000)).catch(console.error));
} 

})
bot.on("guildMemberAdd", member => {
    console.log("[Strandbot Log] " + member.user.username + " has joined Strand's Public Discord!")
    member.guild.channels.find("name", "general").send(member.toString() + " Welcome to The Official 'Strandite' Discord, Refer to <#310247941589696514> for the rules of the Discord!")
    var joinrole = member.guild.roles.find('name', '𝑀𝑒𝓂𝒷𝑒𝓇 ✅');
    member.addRole(joinrole)
});

bot.on("guildMemberRemove", function(member) {
    console.log("[Strandbot Log] " + member.user.username + " has left Strand's Public Discord!")
});

bot.login(process.env.token);
