const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'suggest',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['suggestion'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Envía un mensaje por MD a un usuario (uso para devs)',
            quotedStringSupport: false,
            extendedHelp: 'Envía un mensaje a un usuario por MD para notificaciones del bot (blacklist, solicitud de algo, etc.)',
            usage: '[messageContent:...string]',
            usageDelim: ' '
        });
    }

    async run(message, [messageContent]) {
        //msg.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);

        message.send(
            new MessageEmbed()
            .setTitle('📨・Sugerencia enviada')
            .setDescription(`Se ha enviado tu sugerencia`)
            .addField('Sugerencia:', `\n\`\`\`${messageContent}\`\`\``, false)
            .setThumbnail('https://media.giphy.com/media/3o6Mbfsf4DI4Cds5Ms/giphy.gif')
            .setTimestamp()
            .setColor('RANDOM')
        );

        this.client.channels.cache.get('753653286283903208').send(
            new MessageEmbed()
            .setTitle('📢・Nueva sugerencia')
            .setDescription('Hay una nueva sugerencia para Normal')
            .addField('Usuario:', message.author.tag, true)
            .addField('ID:', message.author.id, true)
            .addField('Bot:', message.author.bot, true)
            .addField('Sugerencia:', `\n\`\`\`${messageContent}\`\`\``, false)
            .setThumbnail('https://media.giphy.com/media/NFA61GS9qKZ68/giphy.gif')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }
}

//this.client.channels.cache.get('748105415702872065').send('BrUh')