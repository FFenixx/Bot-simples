exports.run = (client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para kickar ninguém."); // permissão que o membro precisa.

 if(args.length === 0) return message.reply("Mencione um mebro para banir.");
 
 let membro = message.mentions.users.first(); // mencionar o usuário 
 
 message.guild.member(membro).kick() // kicka o membro,
 message.channel.send(`O membro ${membro} foi kickado com sucesso!`)
 
 }
