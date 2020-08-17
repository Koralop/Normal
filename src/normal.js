const { Client } = require('klasa');
require('dotenv').config({ path: './src/.env' });

const token = process.env.TOKEN;

new Client({
    fetchAllMembers: false,
    prefix: 'n!',
    commandEditing: true,
    typing: true,
    language: 'es-ES',
    readyMessage: (client) => `Listo!!!! Normal está listo para estar en ${client.guilds.cache.size}  servers ;3`
}).login(token);

