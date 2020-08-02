const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'vote',
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
            description: language => language.get('COMMAND_VOTE_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle(message.language.get('COMMAND_VOTE_TITLE'))
            .setDescription(message.language.get('COMMAND_VOTE_TEXT'))
            .addField('Link de votación', `${message.language.get('COMMAND_VOTE_LINK')}`, true)
            .setThumbnail('https://media.giphy.com/media/l41YkEYrcqrPOpuIE/giphy.gif')
            .setColor('RANDOM')
        );
    }

}