module.exports = async (client, member) => {

let canal = member.guild.channels.find(canal => canal.name === "geral"); // nome do canal
canal.send(`${member} entrou.`)
}
