const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'invite',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['inv'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_INVITE_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle(message.language.get('COMMAND_INVITE_TITLE'))
            .setDescription(message.language.get('COMMAND_INVITE_TEXT'))
            .addField(`${message.language.get('COMMAND_INVITE_TEXT_LINK')}`, `${message.language.get('COMMAND_INVITE_LINK')}`, true)
            .addField('Server de soporte', '[Click aquí](https://discord.gg/ZpWE57t)', true)
            .setThumbnail('https://media.giphy.com/media/2yvPrTHxX6wIQM0bWT/giphy.gif')
            .setColor('RANDOM')
        );

       //Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('invite')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
