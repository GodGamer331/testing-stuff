const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const dateformat = require('dateformat');
var now = new Date();
var random = require('random-int');
const PREFIX = ">"

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if (!message.content.startsWith(PREFIX)) return;
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

  // +warn @daeshan <reason>
  let staff = message.member.roles.find("name", "Helper ✊") || message.member.roles.find("name", "𝑀𝑜𝒹 ✊") || message.member.roles.find("name", "𝒜𝒹𝓂𝒾𝓃 ✊");
  if(!message.member.roles.has(staff.id)) return message.reply("You are not a staff member.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find that user");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn other staff members.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  var warnEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setAuthor(`Public Discord Modlogs`, message.guild.iconURL)
  .addField(" **User:**", `<@${wUser.id}>`)
  .addField(" **Action:** ", "Warning#" + warns[wUser.id].warns)
  .addField(" **Action By:** ", `${message.author.username}`)
  .addField(" **Date:**", `${dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}`)
  .addField(" **Reason:** ", `${reason}`)
  .addField("**Case ID:**", `#${random(1000, 10000)}`)

  let warnchannel = message.guild.channels.find(`name`, "modlogs");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send({ embed: warnEmbed });

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("Couldn't find role");
    let mutetime = "60m";
    await wUser.addRole(muterole.id);
    message.channel.send(message.mentions.users.first() + ` has been temporarily muted`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(message.mentions.users.first() + ` has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 6){
    message.guild.member(wUser).kick(reason);
    message.channel.send(message.mentions.users.first() + ` has been kicked.`)
  }

    // if(!message.member.permissions.has('MANAGE_MESSAGES')) {
    //     return message.channel.send('You are not a staff member.');
    //     }
    //     message.delete()
    //     message.channel.send("**[Strandbot]:** Hello Staff member, choose which warning to give ``+warn 1 (@mention) (reason) || +warn 2 (@mention) (reason) || +warn 3 (@mention) (reason)")
}

module.exports.conf = {
    aliases: ['w']
};


// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "warn"

}
