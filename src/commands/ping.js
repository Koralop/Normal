//ping
const { MessageEmbed } = require('discord.js');

exports.run = async ({ message, client }) => {

    message.channel.send(
      new MessageEmbed()
        .setColor("#03a9f4")
        .setTitle("🏓 Pong")
        .setDescription(`⏳ **Ping:** ${client.ws.ping} ms`, true)
        .setTimestamp()
    );

}