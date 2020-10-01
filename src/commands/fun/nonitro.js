const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'nonitro',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: "Comando para los que no pueden permitirse Nitro",
            quotedStringSupport: false,
            usage: ''
        });
    }

    async run(message, [user]) {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username} no puede tener Nitro ;-;`)
                .setImage('https://cdn.discordapp.com/attachments/707537070641381438/757357366378496050/Group1.jpg')
                .setColor('RANDOM')
.setFooter("Meme creado por Pham#3963") //gracias por el meme
            );
        //Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('nonitro')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
