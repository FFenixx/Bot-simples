exports.run = async (client, message, args) => {

    message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`permissao insulficiente.`)
    message.delete()
    const amount = parseInt(args[0]);
    if (isNaN(amount)) {
	return message.reply('informe uma quantidade para apagar.');
    } else if (amount < 2 || amount > 100) {
        
	return message.reply('informe uma quantidade de 2 a 99 mensagens.');
}
        message.channel.bulkDelete(amount, true).catch(err => {
	console.error(err);
	message.channel.send(`${mount} mensagens foram apagadas nesse canal.`);
});
}
