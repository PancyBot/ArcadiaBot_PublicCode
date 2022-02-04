const mongoose = require('mongoose');
const chalk = require('chalk');

const ProteccionSchema = mongoose.Schema({
	guildID: {
		type: String,
		require: true
	}, 
	activo: {
		type: String,
		require: true
	}
})

const model = mongoose.model("AntiBots", ProteccionSchema)
console.log(chalk.green('Base de datos cargada: AntiBots'))

module.exports = model;