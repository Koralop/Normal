const { Client } = require('klasa');
require('dotenv').config({ path: './src/.env' });

const token = process.env.TOKEN;

Client.user.setPresence({
        status: "idle",
        activity: {
            name: "n!help || n!invite",
            type: "WATCHING"
        }
    })

new Client({
    fetchAllMembers: false,
    prefix: ['n!'],
    commandEditing: true,
    typing: true,
    language: 'es-ES',
    owners: ['497061687820812288', //Phamzito
             '685947556655923242', //Gátomo
             '507367752391196682' //lil
    ],
    readyMessage: (client) => `Listo!!!! Normal está listo para estar en ${client.guilds.cache.size}  servers ;3`
}).login(token).catch(console.error);

