const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'trash',
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
            description: 'Dile basura a un usuario',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .',
            usage: '<user:user>'
        });
    }

    async run(message, [user]) {
    const avatar = user.displayAvatarURL({ size: 512 });
    const avatarAuthor = message.author.displayAvatarURL({ size: 512 });


        if (user.id === message.author.id) {
            message.send('<:Tor:731095612665102437>**・Tan desmotivado estas?**')
        } else if (user.id === this.client.user.id) {
             message.send(
                new MessageEmbed()
                .setImage(`https://api.alexflipnote.dev/trash?face=${avatar}&trash=${avatarAuthor}`)
                .setColor('RANDOM')
            );
        } else {
            message.send(
                new MessageEmbed()
                .setImage(`https://api.alexflipnote.dev/trash?face=${avatarAuthor}&trash=${avatar}`)
                .setColor('RANDOM')
            );
        }
    }

}
