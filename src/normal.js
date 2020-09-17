const { Client } = require('klasa');
require('dotenv').config({ path: './src/.env' });

const token = process.env.TOKEN;

new Client({
    fetchAllMembers: false,
<<<<<<< HEAD
    prefix: ['n!', 'N!'],
=======
    prefix: 'n!', 
>>>>>>> cbd1a69a411cf9f333061d8f6e2d4a59972c0332
    commandEditing: true,
    typing: true,
    language: 'es-ES',
    owners: ['497061687820812288', '685947556655923242'],
    // Mierda bug: presence: { activity: { name: `n!help ・ ${client.guilds.cache.size}  servers`, type: 'WATCHING' } },
    readyMessage: (client) => `Listo!!!! Normal está listo para estar en ${client.guilds.cache.size}  servers ;3`
}).login(token).catch(console.error);

