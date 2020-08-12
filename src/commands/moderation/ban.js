const {
    Command
} = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            permissionLevel: 6,
            requiredPermissions: ['BAN_MEMBERS'],
            runIn: ['text'],
            description: 'Bans a mentioned user. Currently does not require reason (no mod-log).',
            usage: '<member:user> [reason:...string]',
            usageDelim: ' '
        });
    }

    async run(message, [user, reason]) {
        if (user.id === message.author.id) {
            'Why would you ban yourself?';
        }
        if (user.id === this.client.user.id) {
            'Por Por ... porqué me quieres banear? que he hecho? ;-; <:Tor:731095612665102437>';
        }

        const member = await message.guild.members.fetch(user).catch(() => null);
        
        if (member) {
            if (member.roles.highest.position >= message.member.roles.highest.position) {
                'You cannot ban this user.';
            }

            if (!member.bannable) {
                'I cannot ban this user.';
            }
        }

        const options = {};
        if (reason) options.reason = reason;

        await message.guild.members.ban(user, options);
        return message.sendMessage(`${user.tag} got banned.${reason ? ` With reason of: ${reason}` : ''}`);
    }

};