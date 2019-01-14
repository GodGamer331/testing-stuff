const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You dont have enought permissions!");
  let aMember = message.guild.member(message.mentions.user.first()) || message.guild.get(args[0]);
  if(!aMember) return message.reply("Specify a Member!");
  let aRole = args.join(" ").slice(22);
  if(!aRole) return message.reply("Please specify role aswell.");
  let gRole = message.guild.role.find("name", role);
  if(!gRole) return message.reply("I couldnt find that role!");
  if(aMember.roles.has(aRole.id));
  await(aMember.addRole(aRole.id));
  
  try{
    aMember.send("You now have role: " + `${gRole.name}`);
  }catch(e){
  await message.channel.send(`User have now ${gRole.name}. I tried to DM him/her but his/her DM's are locked.`);
  }
}

module.exports.help = {
  name: "addrole",
  aliases: []
}
