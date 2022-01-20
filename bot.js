const mineflayer = require('mineflayer')
const autoeat = require("mineflayer-auto-eat")
const fs = require("fs")

const bot = mineflayer.createBot({
    host: 'localhost',
    port: 57089,
    username: 'Diablo_Bot',
    logErrors: false})

bot.loadPlugin(autoeat)

bot.once("spawn", () => {
  bot.autoEat.options.priority = "foodPoints"
  bot.autoEat.options.bannedFood = []
  bot.autoEat.options.eatingTimeout = 3
  bot.chat("/login Diablo")
})

bot.on("health", () => {
    if (bot.food === 20) bot.autoEat.disable()
    // Disable the plugin if the bot is at 20 food points
    else bot.autoEat.enable() // Else enable the plugin again
  })

bot.on('physicTick', async () => {
    fs.readFile("rep_count.txt",(err,data) =>{
        if(err) throw err;
        reps = data.toString()
        console.log(reps)
    })
})

bot.on('physicTick', async () => {
    bot.chat("/attribute SINGHOM931 minecraft:generic.attack_damage base set "+reps)
})