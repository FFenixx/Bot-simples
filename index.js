const Discord = require("discord.js"); // npm i discord.js --save
const Enmap = require("enmap"); // npm i enmap
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

// handler:
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} carregado.`);
    client.commands.set(commandName, props);
  });
});
/*===============================================================================================*/

// iniciar o bot:
client.login(config.token); 
