const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'test',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['commandtest', 'testcommand'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Comando de prueva',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .',
            usage: '<user:user>'
        });
    }

    async run(message, [user]) {
        //nekos.life
        var hugimg = await neko.sfw.hug();


        if (user.id === message.author.id) {
            message.send('<:Tor:731095612665102437>・No puedes abrazarte a tí mismo. Si estás solo, usa el comando sad (no creado)')
        } else if (user.id === this.client.user.id) {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username}, te doy un abrazo`)
                .setImage(hugimg.url)
                .setColor('RANDOM')
            );
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username} abrazó a ${user.username}`)
                .setImage(hugimg.url)
                .setColor('RANDOM')
            );
        }

    }

}