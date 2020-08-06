const {Command} = require('klasa'); //klasa
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
            nsfw: true,
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
        //var yuriimg = await neko.nsfw.yuri();
 
        

        message.send(
            new MessageEmbed()
                .setTitle('xd')
            //.setImage(yuriimg.url)
            .setColor('RANDOM')
        );
    }
        
}