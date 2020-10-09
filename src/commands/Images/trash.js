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
    const avatarAuthor = author.displayAvatarURL({ size: 512 });


        if (user.id === message.author.id) {
            message.send('<:Tor:731095612665102437>・Tampoco seas tan sincero')
        } else if (user.id === this.client.user.id) {
            message.send('Estúpido tu >:U');
        } else {
            message.send(
                new MessageEmbed()
                .setImage(`https://api.alexflipnote.dev/trash?face=${avatarAuthor}&trash=${avatar}`)
                .setColor('RANDOM')
            );
        }
    }

}
