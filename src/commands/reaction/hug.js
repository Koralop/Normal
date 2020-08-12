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
            name: 'hug',
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
            description: language => language.get('COMMAND_HUG_DESCRIPTION'),
            quotedStringSupport: false,
            usage: '<user:user>'
        });
    }

    async run(message, [user]) {
        //nekos.life
        var hugimg = await neko.sfw.hug();


        if (user.id === message.author.id) {
            message.send(message.language.get('COMMAND_HUG_ALONE'))
        } else if (user.id === this.client.user.id) {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username}, ${message.language.get('COMMAND_HUG_NORMALHUGS')}`)
                .setImage(hugimg.url)
                .setColor('RANDOM')
            );
        } else {
            message.send(
                new MessageEmbed()
                .setTitle(`${message.author.username} ${message.language.get('COMMAND_HUG')} ${user.username}`)
                .setImage(hugimg.url)
                .setColor('RANDOM')
            );
        }

    }

}