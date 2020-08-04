const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'putin',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['Putin'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Un meme de Putin',
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //embed
        message.send(
            new MessageEmbed()
            .setTitle('<:comunismo:704342128901357630>・Putin xdddddd')
            .setColor('RANDOM')
        );
        //ya no se ni q hago xd
        message.send('https://cdn.discordapp.com/attachments/707537070641381438/739524968148107325/b775c50cce9c8e87e6c414516c16afaf.mp4');
    }

}