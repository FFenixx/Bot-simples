exports.run = async (client, message, args) => {
    const ms = await message.channel.send("Pong!");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit(`Ping: ${clientms} | WebSocket: ${Math.round(client.ping)}`); 
}
