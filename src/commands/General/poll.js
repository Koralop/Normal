const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'poll',
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
            description: 'Haz una votación básica',
            extendedHelp: 'Crea una votación simple( n!poll "pregunta" "opcion 1" "opcion 2") Ejemplo: n!poll "Cocacola o pepsi?" "Cocacola\" "pepsi"',
            quotedStringSupport: false,
            usage: '"<question:...string>" "<option1:...string>" "<option2:...string>"',
            usageDelim: ' '
        });
    }

    async run(message, [question, option1, option2]) {

        //embed
        message.send(`:bar_chart: **${question}**`)
        message.send(
            new MessageEmbed()
            .addField(':regional_indicator_a:',option1, false)
            .addField(':regional_indicator_b:', option2, false)
            .setThumbnail('https://media.giphy.com/media/3og0IExSrnfW2kUaaI/giphy.gif')
            .setColor('RANDOM')
        );

       //Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('poll')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
