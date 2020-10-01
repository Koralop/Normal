const { Command } = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'xd',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['xD', 'Xd', 'XD'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_XD_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {
        //embed
        message.send(
            new MessageEmbed()
                .setTitle('xddd')
                .setColor('RANDOM')
        );

//Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('xd')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
