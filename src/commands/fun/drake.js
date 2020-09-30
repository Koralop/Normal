const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');


module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'drake',
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
            description: 'Genera un meme Drake',
            quotedStringSupport: false,
            usage: '<no:...string>, <yes:...string>'
        });
    }

    async run(message, [no, yes]) {

            message.send(
                new MessageEmbed()
                .setImage(`https://api.alexflipnote.dev/drake?top=${no}&bottom=${yes}`)
                .setColor('RANDOM')
.setTimestamp()
            );
    

    }

}
