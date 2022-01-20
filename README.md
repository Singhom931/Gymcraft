# Gymcraft
Minecraft but Every Time you do a Bicep Curl you Gain +1 Strength in Game.

[![GymCraft]()](https://youtu.be/71Hxzq3SuyQ-Y "GymCraft")

How to use ?  
Firstly Download all the Libraries Used in the Project.

For the bot.js get mineflayer , mineflayer-auto-eat , fs  
Example:  
```
npm install mineflayer
```  
For the curl detector.py get cv2 , mediapipe , numpy  
Example:
```
pip install numpy
```
Now Open Your Java Minecraft and Start a Server or a Local Host
Now Edit a Specific Block of Code in bot.js file
```
const bot = mineflayer.createBot({
    host: 'localhost',
    port: 57089,
    username: 'Diablo_Bot',
    logErrors: false})
```
This is where you Write the Server Address, use localhost if using Lan World
```
host: 'localhost',
```
This is where you Write the Server Port , Default : 25565 for Non Lan Servers
```
port: 57089,
```
This is where you Write the Bot Username
```
username: 'Diablo_Bot',
```
If using on a offline mode server with a register/login plugin , 
Edit this line , bot will use this command on entering the server allowing it login
```
bot.chat("/login Diablo")
```
If you wanna change the way it increases player damage edit this:
```
bot.on('physicTick', async () => {
    bot.chat("/attribute SINGHOM931 minecraft:generic.attack_damage base set "+reps)
})
```  


Once Done with all of that simply run both bot.js and curl detector.py together while playing minecraft on ur server,
After the Bot Joins the Server make sure to allow cheats and give the Bot OP and Food or Op and Creative.
Cover the Bot account so it doesnt get killed by Mobs as it will be afk only typing commands.
