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
          message.send(
              new MessageEmbed()
              .setTitle(message.language.get('COMMAND_TEST'[1]))
              .setDescription(message.language.get('COMMAND_TEST'[2]))
              .addField(message.language.get('COMMAND_TEST')[3])
              .setColor('RANDOM')
          );
    }
}
