const Discord = require("discord.js")


module.exports = bot => {
     console.log(`${bot.user.username} is online`)
    // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

    let statuses = [
        `to ${bot.guilds.size} servers!`,
        "my prefix is !=",
        "start with !=help 1",
        "Version: 3.3-alpha!",
        `over ${bot.users.size} users!`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "LISTENING"});
        bot.user.setStatus("dnd"); //online, idle, dnd
    }, 5000)

}
