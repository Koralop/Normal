const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'notafurry',
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
            description: "Si no eres un furro usa el comando",
            quotedStringSupport: false,
            usage: ''
        });
    }

    async run(message, [user]) {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username} no es un furro`)
                .setImage('https://cdn.discordapp.com/attachments/707537070641381438/755866141825564682/permiso_del_bueno.png')
                .setColor('RANDOM')
            );

//Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('notafurry')
            .setTimestamp()
            .setColor('RANDOM')
        );

    }

}
