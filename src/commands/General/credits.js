const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'credits',
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
            description: 'Créditos de todos los que hicieron posible Normal',
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle("Créditos")
            .setDescription('Normal fue desarrollado gracias a la colaboración de distintos usuarios')
            .addField('Desarrollo', 'Gátomo, LilMARCROCK22', false)
            .addField('Diseño', 'Gátomo, Li', false)
            .addField('Donantes', 'MyAlejo', false)
            .addField('Agradecimientos', 'Pham', false)
            .setThumbnail('https://media.giphy.com/media/l46CvHCTg7zrrn1cY/giphy.gif')
            .setColor('RANDOM')
        );

this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('credits')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
