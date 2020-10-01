const { Command } = require('klasa');
const {MessageEmbed} = require('discord.js');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'meme',
            enabled: true,
            runIn: ['text'],
            cooldown: 0,
            deletable: false,
            bucket: 1,
            aliases: ['memey', 'memes'],
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            requiredPermissions: [],
            requiredSettings: [],
            subcommands: false,
            description: language => language.get('COMMAND_MEME_DESCRIPTION'),
            quotedStringSupport: false,
        });
    }

    async run(message, [...params]) {

        // Array con muchos memes. poQ no uso una API?
               var memearray = [
                   'https://cdn.discordapp.com/attachments/707537070641381438/723572191735840868/20200301_115913.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723572868935450804/92824345_286562502336987_3648895891311427584_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723572916419297350/20200519_235603.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723572961226784878/77387958_999806967064975_1248914010787545088_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573023407472650/95779957_526957214878396_4191628059280932864_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573094278496276/101541147_132092428483447_4162486104882151424_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573133675593779/101667792_122117619507528_2527183431553515520_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573173668413521/97443933_2812860872170301_4396166307565797376_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573223974895626/99117570_114606880269779_6051653269896298496_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573278714888262/102394848_136306488055866_6832189077091867176_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573304908054629/102295268_2576823809200154_2066439646644011008_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573373896228904/97996842_272224764152252_7944337313046200320_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573618835193876/1ef48b2fa69e72508f251fbd3a4abc3a.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573698136637541/MEME-TE-VEO-Y-ME-PARTO.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573749122728067/4c4ce5908db97fe93e5d435986dafe33.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573810657362000/0H6SG_G2uhUV9dlSjpnLOY1HvQaJWLEc0bHnA9wHx3i9DnWxvb5SC64jh-gAnJPI2lbaw412-h220-rw.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723573929888972880/MEME-REVOLUCION-HAMPARTE-1-508x677.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574024545894430/60d78f0b7e7e494bc25a27e0f5097066.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574122818437210/maxresdefault.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574272580124742/5c7ec8abdc4c2.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574388749893652/CC_0_c76ff09d561a4efa94b8b20353577501_minecraft_minecraft_es_increible.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574527124176956/images.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574609814880386/c6787128d08351dcbd17357a0d0531cf.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574715486306396/124e710201493eb9b0cac0b0383794044edb2e98r1-1197-1563v2_uhq.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723574811032289313/5e08a991eea48152e4d1853bcd109654.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723575024275030036/2512331_202002291243.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723988263907360798/IMG_20190617_120313.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723988327216447692/53761092_2103748866369039_7805843648750288896_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723988382233002104/69701644_1379315478899840_4489972967450607616_n.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/723988408564711524/5db5bd52408c5.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/724326811156217896/FB_IMG_15445676848858191.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/724637207071162408/image0.jpg',
                   'https://cdn.discordapp.com/attachments/707537070641381438/744630465926791238/e58b5803615eac1deb7fd1c1b4be8ae8.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/744630594855501945/image0.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/744630705279205376/D1JD86kXgAEQMYF.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/744630805799895060/20200215_221318.png',
                   'https://cdn.discordapp.com/attachments/707537070641381438/744631238094094407/EV6GP-uVcAA2Vcr.png',
                   '',
                   '',
                   '',
                   '',
                   ''
               ];

               var memerandom = memearray[Math.floor(memearray.length * Math.random())];
        
        //embed
        message.send(
            new MessageEmbed()
                .setImage(memerandom)
                .setColor('RANDOM')
        );

//Analítica
this.client.channels.cache.get('761206537041215488').send(
            new MessageEmbed()
            .setTitle('invite')
            .setTimestamp()
            .setColor('RANDOM')
        );
    }

}        
        
        
        
        
 
