const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

const client = require('nekos.life'); //nekos.life
const neko = new client(); //nekos.life

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'devsend',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['send'],
            guarded: false,
            nsfw: false,
            permissionLevel: 9,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Envía un mensaje por MD a un usuario (uso para devs)',
            quotedStringSupport: false,
            extendedHelp: 'Envía un mensaje a un usuario por MD para notificaciones del bot (blacklist, solicitud de algo, etc.)',
            usage: '<member:user> [messageContent:...string]'
        });
    }
        
    async run(message, [user, messageContent]) {
        //msg.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);
        message.channel.send(
            new MessageEmbed()
            .setTitle('DEV MESSAGE')
            .setDescription(`Se ha enviado un mensaje al usuario: ${user.tag}`)
            .addField('Contenido del mensaje', messageContent, false)
            .setColor('RANDOM')
        );

        this.client.users.cache.get('527516205913866241').send('BrUh');
    }
}