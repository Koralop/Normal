const {Command} = require('klasa'); //klasa
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'devmsg',
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
            usage: '<user:user> [messageContent:...string]',
            usageDelim: ' ' 
        });
    }
        
    async run(message, [user, messageContent]) {
        //msg.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);
        message.send(
            new MessageEmbed()
            .setTitle('Mensaje oficial del equipo de Normal')
            .setDescription(`Se ha enviado un mensaje al usuario: ${user.tag}`)
            .addField('Contenido del mensaje', `\n\`\`\`${messageContent}\`\`\``, false)
            .setThumbnail('https://media.giphy.com/media/hrXNuM1Ei9ajmaUiTs/giphy.gif')
            .setColor('RANDOM')
        );

        this.client.users.cache.get(user.id).send(
            new MessageEmbed()
                .setTitle('📢・Mensaje Oficial del Equipo de Normal')
                .setDescription('El Equipo de Desarrollo de Normal le ha enviado un mensaje informativo.')
                .addField('¿Por qué me envian este mensaje?', 'Si le envian este mensaje se puede deber a que está haciendo un mal uso del bot, se le solicita ayuda para su desarrollo o se le advierte acerca de la colaboración en GitHub, entre otros.')
                .addField('Contenido del mensaje', `\n\`\`\`${messageContent}\`\`\``, false)
                .setThumbnail('https://media.giphy.com/media/2kZa2oQQX3kuVb4x1G/giphy.gif')
                .setTimestamp()
                .setColor('RANDOM')
        );
    }
}