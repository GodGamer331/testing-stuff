const db= require('quick.db');

module.exports.run = async (bot, message, args, func) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("You do not have enought permissions to do that! (Administrator)")
   if(!args.join(" ")) return message.reply("Please specify a role. Example: ``!=set-autorole Member``")
   
   db.setText(`autorole_${message.guild.id}`, args.join(" ").trim()).then(i => {
   
       message.channel.send("Succesfully changed autorole to: " + i.text);
   
   })
}

module.exports.help = {
    name: "set-autorole",
    aliases: []
}
