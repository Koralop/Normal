const {
    Command
} = require('klasa');
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'f',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['F'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_F_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        //Creo un array y algo que ni yo se lo que es xd
        var fgifarray = [
            'https://media.giphy.com/media/hStvd5LiWCFzYNyxR4/giphy.gif',
            'https://media.giphy.com/media/xTiQylEqfhsP1MQHug/giphy.gif',
            'https://media.giphy.com/media/l3fzM2wgd6TygHbYA/giphy.gif',
            'https://media.giphy.com/media/l3fzM2wgd6TygHbYA/giphy.gif'
        ];

        var fgif = fgifarray[Math.floor(fgifarray.length * Math.random())];

        //embed
        message.send(
            new MessageEmbed()
                .setTitle()
                .setImage(fgif)
                .setColor('RANDOM')
        );
    }

}

