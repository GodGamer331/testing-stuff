const botconfig = require("./botconfig.json");
//const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
const db = require("quick.db");
const ms = require("ms");
const client = new Discord.Client();
const Enmap = require('enmap');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const youtube = new YouTube(botconfig.GOOGLE_API_KEY);
const PREFIX = botconfig.prefix;

//const client = new Discord.Client({disableEveryone: true}); #Wtf is going here..
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

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('I am ready!'));

client.on('disconnect', () => console.log('I disconnected!'));

client.on('reconnecting', () => console.log('I am disconnecting!'));

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
  const serverQueue = queue.get(oldMember.guild.id);


  if(oldUserChannel === undefined && newUserChannel !== undefined) {
      // User joines a voice channel
  } else if(newUserChannel === undefined){

    // User leaves a voice channel
      if(oldMember.id === '514856260353392660'){
          return console.log("BOT");
      }
      else{
          if(client.guilds.get(oldMember.guild.id).voiceConnection != null){
              if(client.guilds.get(oldMember.guild.id).voiceConnection.channel.id === oldUserChannel.id){
                    if(oldUserChannel.members.size < 2){
                        serverQueue.songs = [];
                        serverQueue.connection.dispatcher.end('No members left in the channel!')
                    }    
              }else{
                  return console.log('Not in same voice channel!');
              }
          }else{
              return undefined;
          }
      }
         

  }
})

bot.on('guildMemberAdd', guildMember => {
       db.fetch(`autoRole_${guildMember.guild.id}`).then(i => {
	       if(!i.text || i.text.toLowerCase() === 'none') return;
	       else {
                   try{
                      guildMember.addRole(i.text) <-- guildMember.addRole(guildMember.guild.roles.find('name', i.text))
		   } catch (e) {
			   console.log("A guild tried to add autorole but they have invaiod role.")
		   }
	       }
       })
})
bot.on("message", async message => {
  if(message.author.bot) return; //message.channel.reply("Bot users are not allowed to use commands!");
  if(message.channel.type === "dm") return message.author.send("Commands dont work in DM's. Try using it in a server.");
  
  let user = message.mentions.members.first() || message.author
  let bal = await db.fetch(`money_${user.id}`)
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let prefix = botconfig.prefix;
  let modR = "Moderator"; //mod role
  let adminR = "Administrator";	
  let args = messageArray.slice(1);	
  const searchString = args.slice(1).join(' ');
  const url = args[1];
  const serverQueue = queue.get(message.guild.id);
	
  //let prefix = botconfig.prefix;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
  if(cmd === `${prefix}balance` || cmd === `${prefix}bal` || cmd === `${prefix}money`) {
  if (bal === null) bal = 0;
	  
  message.channel.send('You have a balance of `' + bal + '`')
  }
  if(cmd === `${prefix}daily` || cmd === `${prefix}d`) {
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
  if(cmd === `${prefix}addmoney` || cmd === `${prefix}moneyadd` || cmd === `${prefix}add`) {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have enough permission to use this command.')
    }

    if (!args[0]) return message.reply('Please specify an amount to add.')
    if (isNaN(args[0])) return message.reply('That was not a valid number!')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added ' + args[0] + ' to ' + user)
    db.add(money_${user.id}, args[0])

  }
});
        
  

bot.login(process.env.token);
//No one is reading this.. if so then Hi.
