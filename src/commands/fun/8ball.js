const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
      name: '8ball',
			aliases: ['8', 'magic', 'mirror'],
			description: 'El 8ball de toda la vida',
			usage: '<question:...string>'
		});
	}

	run(msg, [question]) {
		msg.send(new MessageEmbed()
                .setTitle(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`)
                .setColor('RANDOM')
	}

};

const answers = [
	'Sí',
  'No',
  'Seguro que sí',
  'Es probable',
  'Eso es imposible',
  'Desde luego!!!',
  'Jamás!!!',
  'Depende', 
  'Con mucha frecuencia',
  'A menudo',
  'Rara vez',
  'Nunca',
  'Puede ser',
  'Siempre'
];
