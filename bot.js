const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593415247801614336")
setInterval(function() {
channel.send(`BOBO BOBO BOBO BOBO BOBO`);
}, 30)
})

client.login(process.env.BOT_TOKEN);