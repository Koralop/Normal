const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'donate',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: [],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Realiza un generoso donativo',
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle('Donate')
            .setDescription('Muchas gracias por escribir donate, tus apoyos nos ayudan a crecer. Te dejo algunos links para donar')
            .addField('<:peipal:763837083323858944>  PayPal', '[click aquí](https://paypal.me/gatomooficial)', true)
            .addField('<:coufi:763838830667104307>  Ko-Fi', '[click aquí](https://ko-fi.com/gatomo_oficial)', true)
            .addField('<:patreoun:763837159098023969>  Patreon (no aconsejao por problemas xd)', '[click aquí](https://www.patreon.com/gatomo_oficial)', true)
            
            .setThumbnail('https://media.giphy.com/media/RMeWKLwvCMJzanG8p5/giphy.gif')
            .setColor('RANDOM')
            .setTimestamp()
        );
    }

}
