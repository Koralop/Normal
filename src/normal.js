//discord.js
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
//mongo
const mongoose = require('mongoose');
//fs
const { readdirSync } = require('fs');
//el .env será de heroku
require("dotenv").config({ path: "./src/.env" });
//chalk
const chalk = require('chalk');
const readyBg = chalk.bold.white.bgBlue;
const errorBg = chalk.bold.white.bgRed;
const errorMsg = chalk.red;
const sucessBg = chalk.bold.white.bgGreen;
const sucessMsg = chalk.green;
const warnBg = chalk.bold.white.bgYellow;
const warnMsg = chalk.yellow;

client.login(process.env.TOKEN);

client.on('ready', async() => { 

    console.log(readyBg(`\n Toy prendido como ${client.user.tag} listo para servir a ${client.guilds.cache.size} servers \n`));
    client.user.setPresence({
        status: "dnd",
        activity: {
            name: "In development mode",
            type: "WATCHING"
        }
    })

    //Obtenemos todos los archivos en comandos
    let datazo = await readdirSync(require('path').join(__dirname,'./commands'));

    for await (let x of datazo) {
        //Establecemos por el nombre del archivo lo que contiene
        client.commands.set(x.replace('.js', ''), require('./commands/' + x)); 

    };
    
});

client.on("message", async (message) => {

    const prefix = 'n!';
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(message.author.bot || !message.content.startsWith(prefix)) return;

const comandoObtenido = client.commands.get(command);

if(!comandoObtenido) return;

else {

comandoObtenido.run({ message, client });

    } 
});

mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }).then(() => {
    console.log(sucessBg('\n [MongoDB]: ') + sucessMsg(' Conectado a la base de datos MongoDB\n'));
}).catch((err) => {
    console.log(errorBg('\n [Error]: ') + errorMsg(` No se puede conectar a la base de datos de MongoDB! Error:\n ${err}\n`));
});

client.getData = async ({ ...find }, model) => {

    const { readdir } = require("fs").promises;
    const db_files = await readdir(require("path").join(__dirname, "./models/"));
    const available_models = db_files.map(elem => elem.endsWith("js") ? elem.slice(0, -3) : elem);

    if (!available_models.includes(model)) return console.log(warnBg('\n [GET_DATA] ') + warnMsg(' Model no encontrado!\n'));

    let db = require('./models/' + model + '.js');

    let getModel = (await db.findOne(find));

    if (!getModel) {

        await db.create(find)

        return getModel;

    }

    else return getModel || {};

}

client.updateData = async ({ ...find }, { ...newValue }, model) => {

    const { readdir } = require("fs").promises;
    const db_files = await readdir(require("path").join(__dirname, "./models/"));
    const available_models = db_files.map(elem => elem.endsWith("js") ? elem.slice(0, -3) : elem);

    if (!available_models.includes(model)) return console.log(warnBg('\n [UPDATE_DATA] ') + warnMsg( 'Model no encontrado!\n'))

    let db = require('./models/' + model + '.js');

    let getModel = (await db.findOne(find));

    if (!getModel) {

        await db.create(find)

        return await db.findOneAndUpdate(find, newValue, { new: true });

    }

    else {

        return await db.findOneAndUpdate(find, newValue, { new: true });

    }

} 