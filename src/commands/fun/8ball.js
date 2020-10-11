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
		return msg.reply(question.endsWith('?') ?
			`🎱 ${answers[Math.floor(Math.random() * answers.length)]}` :
			"🎱 Eso no es una pregunta, no acaba en ``?``");
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
