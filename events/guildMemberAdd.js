module.exports = async (client, member) => {

let canal = member.guild.channels.cache.find(canal => canal.name === "geral"); // nome do canal
canal.send(`${member} entrou.`)
}
