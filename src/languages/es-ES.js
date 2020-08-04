const {
    Language,
    util
} = require('klasa');

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {


            //default
            DEFAULT: (key) => `<:Tor:731095612665102437>・La clave '${key}' no ha sido traducido para 'es-ES' todavía.`,
            DEFAULT_LANGUAGE: '🏳‍🌈・Idioma predeterminado',


            //prefix reminder
            PREFIX_REMINDER: (prefix) => `<a:DigitalWalking:731095664804626514>・Mi prefix en este server es: ${Array.isArray(prefix) ? prefix.map(pre => `\`${pre}\``).join(', ') : `\`${prefix}\``}`,


            //settings
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `<:Tor:731095612665102437>・El valor '${data}' para la clave '${key}' no existe.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `<:Tor:731095612665102437>・El valor '${data}' para la clave '${key}' ya existe.`,
            SETTING_GATEWAY_SPECIFY_VALUE: '<:Tor:731095612665102437>・Debes especificar el valor para añadir o filtrar.',
            SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `<:Tor:731095612665102437>・La clave '${key}' no es un Array.`,
            SETTING_GATEWAY_KEY_NOEXT: (key) => `<:Tor:731095612665102437>・La clave '${key}' no existe en el esquema de datos.`,
            SETTING_GATEWAY_INVALID_TYPE: '<:Tor:731095612665102437>・El parámetro \'type\' debe ser o \'add\' o \'remove\'.',


            //resolvers
            RESOLVER_INVALID_CUSTOM: (name, type) => `<:Tor:731095612665102437>・${name} debe ser un nombre válido de ${type}`,
            RESOLVER_INVALID_PIECE: (name, piece) => `<:Tor:731095612665102437>・${name} debe ser un nombre válido de ${piece}.`,
            RESOLVER_INVALID_MESSAGE: (name) => `<:Tor:731095612665102437>・${name} debe ser una ID de mensaje válida.`,
            RESOLVER_INVALID_USER: (name) => `<:Tor:731095612665102437>・${name} debe ser una mención o una ID de usuario válida.`,
            RESOLVER_INVALID_MEMBER: (name) => `<:Tor:731095612665102437>・${name} debe ser una mención o una ID de usuario válida.`,
            RESOLVER_INVALID_CHANNEL: (name) => `<:Tor:731095612665102437>・${name} debe ser una mención o una ID de canal válida.`,
            RESOLVER_INVALID_EMOJI: (name) => `<:Tor:731095612665102437>・${name} debe ser un emoji válido.`,
            RESOLVER_INVALID_GUILD: (name) => `<:Tor:731095612665102437>・${name} debe ser una ID válida de servidor.`,
            RESOLVER_INVALID_ROLE: (name) => `<:Tor:731095612665102437>・${name} debe ser una mención o una ID de rol válida.`,
            RESOLVER_INVALID_LITERAL: (name) => `<:Tor:731095612665102437>・Su opción no coincide con la siguiente posibilidad: ${name}`,
            RESOLVER_INVALID_BOOL: (name) => `<:Tor:731095612665102437>・${name} debe ser 'true' o 'false'.`,
            RESOLVER_INVALID_INT: (name) => `<:Tor:731095612665102437>・${name} debe ser un número entero.`,
            RESOLVER_INVALID_FLOAT: (name) => `<:Tor:731095612665102437>・${name} debe ser un número.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `<:Tor:731095612665102437>・${name} debe seguir el patrón de la expresión regular \`${pattern}\``,
            RESOLVER_INVALID_URL: (name) => `<:Tor:731095612665102437>・${name} debe ser un enlace URL válido.`,
            RESOLVER_INVALID_DATE: (name) => `<:Tor:731095612665102437>・${name} debe ser una fecha válida.`,
            RESOLVER_INVALID_DURATION: (name) => `<:Tor:731095612665102437>・${name} debe ser una duración válida.`,
            RESOLVER_INVALID_TIME: (name) => `<:Tor:731095612665102437>・${name} debe ser una fecha o duración válida.`,
            RESOLVER_STRING_SUFFIX: ' carácteres',
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `<:Tor:731095612665102437>・${name} debe ser exactamente ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `<:Tor:731095612665102437>・${name} debe estar entre ${min} y ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `<:Tor:731095612665102437>・${name} debe ser mayor que ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `<:Tor:731095612665102437>・${name} debe ser menor que ${max}${suffix}.`,


            //reaction handler (a saber lo que es)
            REACTIONHANDLER_PROMPT: '<:que:724660944059498618>・¿A qué página te gustaría saltar?',


            //Command message
            COMMANDMESSAGE_MISSING: '<:Tor:731095612665102437>・Faltan uno o más argumentos al final de la entrada.',
            COMMANDMESSAGE_MISSING_REQUIRED: (name) => `<:Tor:731095612665102437>・${name} es un argumento requerido.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `<:Tor:731095612665102437>・Falta una opción requerida: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: (possibles) => `<:Tor:731095612665102437>・Su opción no coincide con ninguna de las posibilidades: (${possibles})`,


            //Monitor
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `🥾・${tag} | **${error}** | Usted tiene **${time}** segundos para responder este mensage emergente con un argumento válido. Escribe **"ABORT"** para abortar el mensaje emergente.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_REPEATING_REPROMPT: (tag, name, time) => `🎁・${tag} | **${name}** es un argumento repetible | Usted tiene **${time}** segundos para responder este mensage emergente con un argumento válido. Escribe **"CANCEL"** para abortar el mensaje emergente.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_ABORTED: '🔚・**Abortado**',


            //inhibidores
            INHIBITOR_COOLDOWN: (remaining) => `⏳・Acabas de usar este comando. Espérate ${remaining} segundos.`,
            INHIBITOR_DISABLED: '🛌・**Este comando está desactivado**',
            INHIBITOR_MISSING_BOT_PERMS: (missing) => `<:Tor:731095612665102437>・Permisos insuficientes, necesito: **${missing}**`,
            INHIBITOR_NSFW: '🔞🔥・Porfavor, usa comandos NSFW en un canal NSFW, que aquí que hay niños',
            INHIBITOR_PERMISSIONS: '⛔・No tienes permisos para usar este comando',
            INHIBITOR_REQUIRED_CONFIGS: (settings) => `<:Tor:731095612665102437>・El servidor no tiene las siguientes clave${settings.length > 1 ? 's' : ''}: **${settings.join(', ')}** y no puede ser ejecutado.`,
            INHIBITOR_RUNIN: (types) => `<:Tor:731095612665102437>・Este comando sólo está disponible en los canales de tipo: ${types}.`,
            INHIBITOR_RUNIN_NONE: (name) => `<:Tor:731095612665102437>・el comando ${name} no está configurado para ser ejecutado en cualquier canal.`,


            //klasa command

            //blacklist
            COMMAND_BLACKLIST_DESCRIPTION: '🏴・Añade y retira usuarios del Blacklist',
            COMMAND_BLACKLIST_SUCCESS: (usersAdded, usersRemoved, guildsAdded, guildsRemoved) => [
                usersAdded.length ? `**🙍‍♂️・Usuarios añadidos**\n${util.codeBlock('', usersAdded.join(', '))}` : '',
                usersRemoved.length ? `**🙍‍♂️・Usuarios eliminados**\n${util.codeBlock('', usersRemoved.join(', '))}` : '',
                guildsAdded.length ? `**💻・Servidores añadidos**\n${util.codeBlock('', guildsAdded.join(', '))}` : '',
                guildsRemoved.length ? `**💻・Servidores eliminados**\n${util.codeBlock('', guildsRemoved.join(', '))}` : ''
            ].filter(val => val !== '').join('\n'),

            //eval
            COMMAND_EVAL_DESCRIPTION: '<:javascript:553682981622120484> <:JavaScriptECMA:703449987916496946>・Evalúa Javascript arbitrario. Reservado para el dueño del bot.',
            COMMAND_EVAL_EXTENDEDHELP: [
                'El comando eval ejecuta el código tal y como está escrito, cualquier error será capturado.',
                'También usa la herramienta "flags". Escribe --silent, --depth=number o --async para personalizar la salida.',
                'El flag --silent silencia la salida.',
                'El flag --depth acepta un número, por ejemplo, --depth=2, para personalizar la profundidad de util.inspect.',
                'El flag --async rodea el código en un AsyncFunction en el cual puedes usar await, sin embargo, si necesitas saber el valor de algo, necesitarás la palabra clave return.',
                'El flag --showHidden activará la opción showHidden de util.inspect.',
                'Si la salida es demasiado largo, la salida será enviado como archivo, o en la consola si el bot no tiene el permiso ATTACH_FILES.'
            ].join('\n'),
            COMMAND_EVAL_ERROR: (time, output, type) => `**❌・Error**:${output}\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_OUTPUT: (time, output, type) => `**🎍・Salida**:${output}\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_SENDFILE: (time, type) => `🖼・La salida era muy muy muy larga... Te lo envío en un archivo.\n**🧱・Tipo**:${type}\n${time}`,
            COMMAND_EVAL_SENDCONSOLE: (time, type) => `🖼・La salida era muy muy larga... Revisa la consola.\n**🧱・Tipo**:${type}\n${time}`,

            //unload
            COMMAD_UNLOAD: (type, name) => `📉・Descargado la pieza tipo ${type}: ${name}`,
            COMMAND_UNLOAD_DESCRIPTION: 'Descarga una pieza de Klasa.',
            COMMAND_UNLOAD: (type, name) => `📉・Descargado la pieza tipo ${type}: ${name}`,

            //transfer
            COMMAND_TRANSFER_ERROR: '<:Tor:731095612665102437>・El archivo ha sido transferido o nunca existió.',
            COMMAND_TRANSFER_SUCCESS: (type, name) => `🔀・Transferido la pieza tipo ${type}: ${name} con éxito.`,
            COMMAND_TRANSFER_FAILED: (type, name) => `<:Tor:731095612665102437>・La transferencia de la pieza tipo ${type}: ${name} al Cliente ha fallado. Por favor, revisa su consola.`,

            //reload
            COMMAND_RELOAD: (type, name) => `🔃・Recargado la pieza tipo ${type}: ${name}`,
            COMMAND_RELOAD_ALL: (type) => `🔃・Recargado todas las piezas tipo ${type}.`,
            COMMAND_RELOAD_DESCRIPTION: 'Recarga una pieza de Klasa, o todas las piezas de un una colección.',
            COMMAND_RELOAD_EVERYTHING: '🔃・Recargando todas las piezas',

            //reboot
            COMMAND_REBOOT: '🔄・**Reiniciando...**・🔄',
            COMMAND_REBOOT_DESCRIPTION: 'Reinicia el bot.',

            //ping
            COMMAND_PING: '¿Ping?',
            COMMAND_PING_DESCRIPTION: 'Ejecuta una prueba de conexión a Discord.',
            COMMAND_PINGPONG: (diff, ping) => `🏓・¡Pong! \n \n <a:Lel:738106782089740410> ・El viaje duró: ${diff}ms \n <a:Rainbowflyinghearts:736074024156790834> ・Latido: ${ping}ms`,

            //invite
            COMMAND_INVITE_SELFBOT: '¿Por qué necesitarías un enlace de invitación para un selfbot?',
            COMMAND_INVITE: (client) => [
                `Para añadir ${client.user.username} a tu servidor de Discord:`,
                `<${client.invite}>`,
                util.codeBlock('', [
                    'El enlace de arriba está generado con los permisos necesarios para ejecutar todos los comandos actuales.',
                    'Entiendo que no todos los permisos son necesarios para todos los servidores, pero no se preocupe de remover alguno de los permisos.',
                    'Si intentas usar un comando que require más permisos de los que el bot tiene, te lo haré saber.'
                ].join(' ')),
                'Por favor reporta los problemas en <https://github.com/dirigeants/klasa> si encuentras algún bug.'
            ],
            COMMAND_INVITE_DESCRIPTION: 'Muestra el enlace de invitación para el bot.',

            //info
            COMMAND_INFO: [
                'Klasa es un framework \'plug-and-play\' construido encima de la librería Discord.js.',
                'La mayor parte del código es modularizado, lo cual permite a los desarrolladores editar Klasa para encajar con sus necesidades.',
                '',
                'Algunas de las características de Klasa incluye:',
                '• 🐇💨 Carga muy rápida con soporte ES2017 (`async`/`await`).',
                '• 🎚🎛 Configuración separada para cada servidor, usuario, e cliente; que puede ser expandido con tu código.',
                '• 💬 Un sistema de comandos personalizable con análisis automático de argumentos y fácil de usar, refrescar, y descargar módulos.',
                '• 👀 "Monitores", los cuales pueden interactuar con todos los mensajes, como un evento de mensaje normal (Filtro de palabras, protección de spam, etc).',
                '• ⛔ "Inhibidores", los cuales pueden prevenir la ejecución de los comandos basado en un set de parámetros (Permisos, Listas negras, etc).',
                '• 🗄 "Proveedores", los cuales te permiten conectar Klasa con una base de datos cualquiera.',
                '• ✅ "Finalizadores", los cuales son ejecutados después de un comando lanzado con éxito.',
                '• ➕ "Extensibles", código que actua pasivamente. Añaden propiedades o métodos a las clases de Discord.js.',
                '• 🌐 "Lenguages", los cuales permiten usar diferentes lenguages en tu bot.',
                '• ⏲ "Tareas", pueden ser programados para ejecutar código en el futuro, opcionalmente repetibles.',
                '',
                'Esperamos servir un framework 100% personalizable para todas las audiencias. Nosotros hacemos actualizaciones frecuentes.',
                'Si estás interesado en nosotros, revísanos en <https://klasa.js.org>',
                ' ',
                'Puro spam de klasa, pero me da pereza quitarlo xd' //no me culpen ;-;
            ],
            COMMAND_INFO_DESCRIPTION: 'Provee información sobre el bot.',

            //help
            COMMAND_HELP_DESCRIPTION: 'Muestra el mensaje de ayuda para los comandos.',
            COMMAND_HELP_NO_EXTENDED: 'Descripción detallada no disponible.',
            COMMAND_HELP_DM: '📨・La lista de comandos ha sido enviado a tus mensajes privados.',
            COMMAND_HELP_NODM: '<:Tor:731095612665102437>・Parece que tienes tus mensajes privados desactivados, no pude enviarte la lista de comandos.',
            COMMAND_HELP_USAGE: (usage) => `Uso :: ${usage}`,
            COMMAND_HELP_EXTENDED: 'Información Detallada ::',

            //eneable
            COMMAND_ENABLE: (type, name) => `📈・Activado con éxito la pieza tipo ${type}: ${name}`,
            COMMAND_ENABLE_DESCRIPTION: 'Re-activa temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',

            //disable
            COMMAND_DISABLE: (type, name) => `📉・Desactivado con éxito la pieza ${type}: ${name}`,
            COMMAND_DISABLE_DESCRIPTION: 'Re-desactiva temporalmente alguna pieza. Su estado original será restaurado al reiniciar.',
            COMMAND_DISABLE_WARN: '⚠⚠⚠・**Probablemente no quieras desactivar eso, ya que no podrías ejecutar un comando para reactivarlo.**・⚠⚠⚠',

            //conf
            COMMAND_CONF_NOKEY: 'Debes escribir una clave',
            COMMAND_CONF_NOVALUE: 'Debes escribir un valor',
            COMMAND_CONF_GUARDED: (name) => `La clave ${util.toTitleCase(name)} no debería ser desactivado.`,
            COMMAND_CONF_UPDATED: (key, response) => `Actualizado con éxito la clave **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: 'Esta clave no almacena múltiples valores. Usa la acción \'reset\'.',
            COMMAND_CONF_GET_NOEXT: (key) => `La clave **${key}** no parece existir.`,
            COMMAND_CONF_GET: (key, value) => `El valor para la clave **${key}** es: \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `El valor para la clave **${key}** ha sido restaurada a: \`${response}\``,
            COMMAND_CONF_SERVER_DESCRIPTION: 'Define la configuración por servidor.',
            COMMAND_CONF_SERVER: (key, list) => `**Configuración del servidor${key}**\n${list}`,
            COMMAND_CONF_USER_DESCRIPTION: 'Define la configuración por usuario.',
            COMMAND_CONF_USER: (key, list) => `**Configuración del usuario${key}**\n${list}`,

            //stats
            COMMAND_STATS: (memUsage, uptime, users, servers, channels, klasaVersion, discordVersion, processVersion, message) => [
                '= 📊・STATS・📊 =',
                '',
                `• Uso Memoria  :: ${memUsage} MB`,
                `• T. Actividad :: ${uptime}`,
                `• Usuarios     :: ${users}`,
                `• Servidores   :: ${servers}`,
                `• Canales      :: ${channels}`,
                `• Klasa        :: v${klasaVersion}`,
                `• Discord.js   :: v${discordVersion}`,
                `• Node.js      :: ${processVersion}`,
                `• Shard        :: ${(message.guild ? message.guild.shardID : 0) + 1} / ${this.client.options.totalShardCount}`
            ],
            COMMAND_STATS_DESCRIPTION: 'Provee algunos detalles sobre el bot y sus estadísticas.',

            //prompt
            MESSAGE_PROMPT_TIMEOUT: 'El tiempo ha expirado.',


            //Mis commands

            //f
            COMMAND_F: ':regional_indicator_f:・FFFFF',
            COMMAND_F_DESCRIPTION: 'Una gran F en el chat',

            //UTC
            COMMAND_UTC_DESCRIPTION: 'Despliega la hora UTC',
            COMMAND_UTC: 'Hora UTC: ',

            //vote
            COMMAND_VOTE_DESCRIPTION: 'Vota por nosotros en Top.gg',
            COMMAND_VOTE_TITLE: '🗳・VOTE',
            COMMAND_VOTE_TEXT: 'Vote por nosotros en Top.gg para hacer crecer al bot',
            COMMAND_VOTE_TEXT_LINK: 'Link de votación',
            COMMAND_VOTE_LINK: '[Click aquí para votar](https://top.gg/bot/698568850651873299/vote)',

            //meme
            COMMAND_MEME_DESCRIPTION: 'Muestra un meme aleatorio',

            //xd
            COMMAND_XD_DESCRIPTION: 'Reacciona con un xd',

            //update
            COMMAND_UPDATE_DESCRIPTION: 'Provee toda la información de las actualizaciones del bot',
            COMMAND_UPDATE_TITLE: '📤・UPDATE',
            COMMAND_UPDATE_TEXT: 'Aquí se muestra la versión actual del bot, los comandos nuevos modificados y eliminados y las novedades',
            COMMAND_UPDATE_VERSION: '**Versión del bot: 0.1.0 indev (Big Bang Versions)**',
            COMMAND_UPDATE_NEW_TITLE: '✨・Comandos Nuevos',
            COMMAND_UPDATE_NEW: (prefix) => `Comandos internos de Klasa
                \n${prefix}help
                \n${prefix}f
                \n${prefix}meme
                \n${prefix}xd
                \n${prefix}update
                \n${prefix}utc
                \n${prefix}vote`,
            COMMAND_UPDATE_FIX_TITLE: '🔨・Comandos Reparados/mejorados',
            COMMAND_UPDATE_FIX: 'Actualmente ninguno',
            COMMAND_UPDATE_DELETIONS_TITLE: '🚮・Comandos Eliminados',
            COMMAND_UPDATE_DELETIONS: 'Actualmente ninguno',
            COMMAND_UPDATE_WHATSNEW_TITLE: '🥗・Novedades',
            COMMAND_UPDATE_WHATSNEW: `Klasa como Framework
            \nHosteado en Heroku
            \nPresente en Top.gg
            \nOpenSource`,
            COMMAND_UPDATE_FOOTER: 'Normal Bot・Desarrollado por Gátomo・V. 0.1.0 Indev (Big Bang Versions)・MIT license',
            
            //invite
            COMMAND_INVITE_DESCRIPTION: 'Vota por nosotros en Top.gg',
            COMMAND_INVITE_TITLE: '🎁・INVITE',
            COMMAND_INVITE_TEXT: 'Invite a Normal para añadirlo a su server',
            COMMAND_INVITE_TEXT_LINK: 'Link de invitación',
            COMMAND_INVITE_LINK: '[Click aquí para invitar](https://discord.com/api/oauth2/authorize?client_id=698568850651873299&permissions=8&scope=bot)',
        };
    }

    async init() {
        await super.init();
    }

};