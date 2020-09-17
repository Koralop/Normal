const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'kuni',
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
            description: 'Lame la concha de un usuario',
            quotedStringSupport: false,
            extendedHelp: 'No ',
            usage: '<user:user>'
        });
    }

    async run(message, [user]) {
        //nekos.life
        var kuniimg = await neko.nsfw.kuni();


        if (user.id === message.author.id) {
            message.send('**:U ... No**')
        } else if (user.id === this.client.user.id) {
            message.send('**No quiero participar en tus orgías >:U**');
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username} está lamiendo a ${user.username}`)
                .setImage(kuniimg.url)
                .setColor('RANDOM')
            );
        }
    }

}
