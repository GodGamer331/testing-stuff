const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    let statuses = [
        `to ${bot.guilds.size} servers!`, //shows in how many servers I am!
        "my prefix is !=", //my Prefix!
        "start with !=help 1", //simple help!
        "Version: 3.3-alpha!", //Bots version!
        `over ${bot.users.size} users!` //shows how many users im managing!
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});
        bot.user.setStatus("dnd"); //online, idle, dnd
    }, 5000)

}
