﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Hassan_Gamer");


client.on("ready", () => {
let channel =     client.channels.get("518118229453963275")
setInterval(function() {
channel.send(`hi`);
}, 25)
})
 
 
client.login("process.env.BOT_TOKEN");
