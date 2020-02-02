exports.run = (client, message, args) => {

const seuid = "SEU ID"

if (message.author.id !== seuid) return message.reply(`apenas o <@${seuid}> pode usar esse comando.`) 
  if (!args[0])
    return message.reply("escreva um comando para recarregar!");

    const commandName = args[0];

    if(!client.commands.has(commandName)) {
      return message.reply("comando não encontrado.");
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.reply(`O comando ${commandName} foi recarregado.`);
};
