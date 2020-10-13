//discord.js
const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');
client.commands = new Discord.Collection();
//fs
const { readdirSync } = require('fs');
//el .env será de heroku
require("dotenv").config({ path: "./src/.env" });
client.login(process.env.TOKEN);

client.on('ready', async() => { 

    console.log('toy prendio como ' + client.user.tag);
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
        client.commands.set(x.replace('.js', ''), require('./commands/' + x)); //ando leyendo el codigo para comprenderlo xd

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
    console.log("[MongoDB]: Conectado a la base de datos Mongodb.");
}).catch((err) => {
    console.log(`[Error]: No se puede conectar a la base de datos de Mongodb. Error: ${err}`);
});

client.getData = async ({ ...find }, model) => {

    const { readdir } = require("fs").promises;
    const db_files = await readdir(require("path").join(__dirname, "./models/"));
    const available_models = db_files.map(elem => elem.endsWith("js") ? elem.slice(0, -3) : elem);

    if (!available_models.includes(model)) return console.log('[GET_DATA]Model no encontrado!')

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

    if (!available_models.includes(model)) return console.log('[UPDATE_DATA]Model no encontrado!')

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