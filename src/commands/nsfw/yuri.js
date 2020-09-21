const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'yuri',
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
        });
    }

    async run(message, [user]) {
        //nekos.life
        var yuriimg = await neko.nsfw.yuri();

            message.send(
                new MessageEmbed()
                .setImage(yuriimg.url)
                .setColor('RANDOM')
            );
        
    }

}