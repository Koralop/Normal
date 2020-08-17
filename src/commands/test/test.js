const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

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
            permissionLevel: 9,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Comando de prueva',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .',
            usage: ''
        });
    }
        
    async run(message, [...args]) {
        message.send('tienes un mensaje en md, pvto')
          message.author.send(
              new MessageEmbed()
              .setTitle(`${message.author.username} :v`)
              .setImage(this.client.user.avatarURL())
              .setColor('RANDOM')
          );
    }
}