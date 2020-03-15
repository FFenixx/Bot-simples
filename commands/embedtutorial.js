const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
let embed = new MessageEmbed()
.setAuthor(name, [icon], [url])
.setTitle("TITULO")
.setDescription("Descrição")
.addField("COLUNA 1", "COLUNA 2"/*, true or false*/)
setURL(/*URL*/)
.setImage("LINK DA IMAGEM")
.setThumbnail("LINK DA IMAGEM")
.setFooter("MENSAGEM")
.addBlackField() // pula uma linha
.setColor(/*COR DO EMBED*/)
setTimestamp() // data atual
message.channel.send(embed)
}
