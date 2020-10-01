const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'fuck',
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
            description: ':v comando nsfw :v (ke palo no kiero escribir ninguna descripcion)',
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
                .setTitle(`${message.author.username} Se cogió a ${user.username}`)
                .setImage(henimg.url)
                .setColor('RANDOM')
            );
        }

//Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('fuck')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}
