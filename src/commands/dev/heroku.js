const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'heroku',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['log'],
            guarded: false,
            nsfw: false,
            permissionLevel: 9,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Dashboard de Heroku',
            quotedStringSupport: false,
            extendedHelp: 'No extended help available ;-; .',
            usage: ''
        });
    }
        
    async run(message, [...args]) {
        message.send('<a:bien_circulo:745335492110843995>**・El dashboard de Heroku está en tu MD**');
        message.author.send(
            new MessageEmbed()
            .setTitle(`${message.author.username}, aquí tienes`)
            .setColor('RANDOM')
        );
        message.author.send('<a:bien_circulo:745335492110843995>');
        message.author.send('**Dashboard:**\nhttps://dashboard.heroku.com/apps/normal-bot-hosting');
        message.author.send('<a:bien_circulo:745335492110843995>');
        message.author.send('**Logs:**\nhttps://dashboard.heroku.com/apps/normal-bot-hosting/logs')
    }
}