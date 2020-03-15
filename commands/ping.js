exports.run = async (client, message, args) => {
    const msg = await message.channel.send("Pong!");
	const clientms = msg.createdTimestamp - message.createdTimestamp;
	ms.edit(`Ping: ${clientms} | WebSocket: ${client.ws.ping}`); 
}
