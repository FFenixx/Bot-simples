exports.run = (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("você não tem permissão para banir ninguém."); // permissão que o membro precisa.
 
 let membro = message.mentions.users.first(); // mencionar o usuário 
 if(!membro) return message.reply("mencione um membro para banir.")
 
message.guild.members.ban(membro.id) // bane o membro,
 message.channel.send(`O membro ${membro} foi banido com sucesso!`)
 
 }
