const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'update',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['updates', 'release', 'releases'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_UPDATE_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle(message.language.get('COMMAND_UPDATE_TITLE'))
            .setDescription(message.language.get('COMMAND_UPDATE_TEXT'))
            .addField(message.language.get('COMMAND_UPDATE_VERSION'), '\n.', false)
            .addField(message.language.get('COMMAND_UPDATE_NEW_TITLE'), message.language.get('COMMAND_UPDATE_NEW'), false)
            .addField(message.language.get('COMMAND_UPDATE_FIX_TITLE'), message.language.get('COMMAND_UPDATE_FIX'), false)
            .addField(message.language.get('COMMAND_UPDATE_DELETIONS_TITLE'), message.language.get('COMMAND_UPDATE_DELETIONS'), false)
            .addField(message.language.get('COMMAND_UPDATE_WHATSNEW_TITLE'), message.language.get('COMMAND_UPDATE_WHATSNEW'), false)
            .addField(message.language.get('COMMAND_UPDATE_GITHUBTAGS_TITLE'), message.language.get('COMMAND_UPDATE_GITHUBTAGS'), false)
            .setFooter(message.language.get('COMMAND_UPDATE_FOOTER'))
            .setImage('https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif')
            .setColor('RANDOM')
        );
    }

}