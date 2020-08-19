const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'doc',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['klasa'],
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
        message.send('<a:bien_circulo:745335492110843995>**・La doc de Klasa está en tu MD**');
          message.author.send(
              new MessageEmbed()
              .setTitle(`${message.author.username}, aquí tienes`)
              .setColor('RANDOM')
        );
        message.author.send('<a:bien_circulo:745335492110843995>');
        message.author.send('**Doc:**\nhttps://klasa.js.org/#/docs/klasa/v0.5.0/Getting%20Started/GettingStarted');
    }
}