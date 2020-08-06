<div align="center">
  <br />
  <p>
    <a href="https://discordapp.com/oauth2/authorize?client_id=507073349336432640&permissions=3072&scope=bot"><img src="https://cdn.discordapp.com/attachments/707537070641381438/740987659597643857/cd1415975358b266f128b57bccb95b36.png" width="256" height="256" alt="Husky" /></a>
  </p>
  
  <br />
  <p>
    <a href="https://discord.gg/NmW8kYv"><img src="https://img.shields.io/discord/685949311443271744?color=7289DA&label=DISCORD&logo=DISCORD&style=for-the-badge" alt="Discord server" /></a>
  <a href="https://github.com/Gatomo-BUnkers/Normal/"><img src="https://img.shields.io/github/package-json/v/Gatomo-Bunkers/Normal?logo=Pinboard&style=for-the-badge" alt="Normal version" /></a>
  <a href="https://github.com/Gatomo-Bunkers/Normal/graphs/contributors"><img src="https://img.shields.io/github/contributors/Gatomo-Bunkers/Normal.svg?logo=Github&style=for-the-badge" alt="Contributors" /></a>

<a href="https://top.gg/bot/698568850651873299" >
  <img src="https://top.gg/api/widget/status/698568850651873299.svg" alt="Normal" />
</a>
<a href="https://top.gg/bot/698568850651873299" >
  <img src="https://top.gg/api/widget/servers/698568850651873299.svg" alt="Normal" />
</a>
<a href="https://top.gg/bot/698568850651873299" >
  <img src="https://top.gg/api/widget/upvotes/698568850651873299.svg" alt="Normal" />
</a>
<a href="https://top.gg/bot/698568850651873299" >
  <img src="https://top.gg/api/widget/lib/698568850651873299.svg" alt="Normal" />
</a>
<a href="https://top.gg/bot/698568850651873299" >
  <img src="https://top.gg/api/widget/owner/698568850651873299.svg" alt="Normal" />
</a>
  </p>
</div>


# GUÍA DE DESARROLLO DE NORMAL
**SI DESEAS CONTRIBUIR AL DESARROLLO DE NORMAL, PORFAVOR, LÉETE ESTO PARA EVITAR ERRORES O MALENTENDIDOS, ENTRE OTROS**

Buenas. Al parecer deseas participar en el desarrollo de Normal, pero tienes que tener claro algunas cosas antes de empezar.

## Requisitos para participar en el desarrollo
Estos son los siguientes requisitos para participar en el desarrollo

 - Tener conocimientos básicos de JavaScript, Node.JS, Git y GitHub
 - Tener experiencia en programación
 - Hablar español
 - Estar en el server oficial para desarrollarlo
 - Conocer lo básico de Klasa.JS 

Si no comprendes muy bien JavaScript no te culpo, tampoco tengo muchos conocimientos xd.
Para comprender como funciona Klasa.JS porfavor, visita la página de Klasa y léete la documentación.
Si posees alguna duda, puedes consultarlo con Gátomo en el server oficial.

## Comandos
### Creación de comandos
Para la creación de comandos, tienes que comprender algunas cosas
Los comandos en Klasa son de la siguiente manera:
```js
const { Command } = require('klasa');
module.exports = class extends Command { constructor(...args) {
super(...args, {
name: 'hola', //nombre del comando. al escribr n!hola el comando se ejecutará
enabled: true, //si está activado o desactivado
runIn: ['text', 'dm'], //Donde se puede ejecutar
cooldown: 0, //pos eso, cooldown
deletable: false, //ni idea
bucket: 1, //no lo se
aliases: ['hi', 'hello'], //otros nombres a los que el comando reaccionará. n!hola y n!hi harán lo mismo
guarded: false, //no lo se
nsfw: false, //indica si el comando es un comando nsfw
permissionLevel: 0, //Nivel de permiso para usar el comando. Más info en la web de klasa
requiredPermissions: [], //permisos requeridos para usar el comando
requiredSettings: [], //no tengo ni idea de nada ;-;
subcommands: false, //No lo se
description: '', //Descripción del comando
quotedStringSupport: false, //¿?
usage: '', //Algunas cosas para que funcionen los comandos. Más info en Klasa
usageDelim: undefined, //¿?
extendedHelp: 'No extended help available.' //Información avanzada
}); 
} 
async run(message, [...params]) {
// Aquí irá el Código del bot con sus embeds if else y todas esas cosas
}
```
