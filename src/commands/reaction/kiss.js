const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'kiss',
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
            description: ':v',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .',
            usage: '<user:user>'
        });
    }

    async run(message, [user]) {
        //nekos.life
        var kissimg = await neko.sfw.kiss();


        if (user.id === message.author.id) {
            message.send('<:Tor:731095612665102437>**・No puedes besarte a tí mismo. Si quieres te doy un espejo**')
        } else if (user.id === this.client.user.id) {
            message.send('**No quiero besarte akosador**');
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${author.username} besó a ${user.username}`)
                .setImage(kissimg.url)
                .setColor('RANDOM')
            );
        }
    }

}