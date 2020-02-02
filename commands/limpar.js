exports.run = async (client, message, args) => {

    message.delete()
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`${message.author}, Você deve ter a permissão de gerenciar mensagens para usar o comando!`)
        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("<:x_:657038227349176320>   Diga de 2 à 100 mensagens para excluir.");
        const fetched = await message.channel.fetchMessages({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send("Ocorreu um erro."));
                        message.channel.send(`${deleteCount} mensagens deletadas deletadas.`)
}
