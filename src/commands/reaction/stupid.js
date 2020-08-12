const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'stupid',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['baka', 'idiot'],
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
        var bakaimg = await neko.sfw.baka();


        if (user.id === message.author.id) {
            message.send('<:Tor:731095612665102437>・Tampoco seas tan sincero')
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${user.username}, eres un idiota >:U`)
                .setImage(bakaimg.url)
                .setColor('RANDOM')
            );
        }

    }

}