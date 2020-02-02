exports.run = (client, message, args) => {

if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("você não tem permissão para banir ninguém."); // permissão que o membro precisa.

 if(args.length === 0) return message.reply("Mencione um mebro para banir.");
 
 let membro = message.mentions.users.first(); // mencionar o usuário 
 
 message.guild.member(membro).ban() // bane o membro,
 message.channel.send(`O membro ${membro} foi banido com sucesso!`)
 
 }
