const {
    Command
} = require('klasa'); //klasa
const {
    MessageEmbed
} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'donatememe',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['addmeme'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: 'Envía un meme para el desarrollo de Normal',
            quotedStringSupport: false,
            extendedHelp: 'Envía un meme para el desarrollo de Normal. Usalo de forma responsalbe',
            usage: '<meme:...string>',
            usageDelim: ' '
        });
    }

    async run(message, [meme]) {
        //msg.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);

        message.send(
            new MessageEmbed()
            .setTitle('📨・Meme enviado')
            .setDescription(`Se ha enviado tu meme. Se revisará por si es adecuado para la comunidad`)
            .addField('Meme: ', `\n\`\`\`${meme}\`\`\``, false)
            .setImage(meme)
            .setThumbnail('https://media.giphy.com/media/3o6Mbfsf4DI4Cds5Ms/giphy.gif')
            .setTimestamp()
            .setColor('RANDOM')
        );

        this.client.channels.cache.get('753653286283903208').send(
            new MessageEmbed()
            .setTitle('📢・Nuevo meme')
            .setDescription('Hay un nuevo meme para Normal')
            .addField('Usuario:', message.author.tag, true)
            .addField('ID:', message.author.id, true)
            .addField('Bot:', `${message.author.bot? `✅` : `❎`}`, true)
            .addField('Meme:', `\n\`\`\`${meme}\`\`\``, false)
            .setThumbnail('https://media.giphy.com/media/NFA61GS9qKZ68/giphy.gif')
            .setImage(meme)
            .setTimestamp()
            .setColor('RANDOM')
        );
    }
}
