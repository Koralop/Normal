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
            nsfw: true,
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
        var henimg = await neko.nsfw.randomHentaiGif();


        if (user.id === message.author.id) {
            message.send('**:U ... No**')
        } else if (user.id === this.client.user.id) {
            message.send('**No quiero participar en tus orgías >:U**');
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${user.username} Se cogió a ${user.username}`)
                .setImage(henimg.url)
                .setColor('RANDOM')
            );
        }
    }

}