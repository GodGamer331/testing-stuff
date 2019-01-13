const config = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async() => {
  console.log("Bot je ready!")
  bot.user.setActivity("Codes in commands!", (type: "STREAMING"))
})


bot.login("config.token");
