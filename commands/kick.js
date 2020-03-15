exports.run = (client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para banir ninguém."); // permissão que o membro precisa.
 
 let membro = message.mentions.users.first(); // mencionar o usuário 
 if(!membro) return message.reply("mencione um membro para kickar.")
 
message.guild.members.kick(membro.id) // kicka o membro,
 message.channel.send(`O membro ${membro} foi kickado com sucesso!`)
 
 }
