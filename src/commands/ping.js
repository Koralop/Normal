exports.run = async ( {message, client} ) => {

    message.channel.send(`${client.ws.ping} ms`);

}