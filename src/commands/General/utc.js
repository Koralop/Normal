const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'utc',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['UTC'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_UTC_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //defino el tiempo :v
        var d = new Date();
        var hour = d.getUTCHours();
        var min = d.getUTCMinutes();
        var sec = d.getUTCSeconds();

        //embed
        message.send(
            new MessageEmbed()
            .setTitle(`${message.language.get('COMMAND_UTC')}${hour}:${min}:${sec}`)
            .setThumbnail('https://media.giphy.com/media/ZU3GBNGsAbidG/giphy.gif')
            .setColor('RANDOM')
        );
    }

}