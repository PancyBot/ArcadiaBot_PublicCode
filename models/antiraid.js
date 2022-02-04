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
	},
	userType: {
		type: String,
		require: true
	},
	tiempo1: {
		type: Number,
		require: true
	},
	limite1: {
		type: Number,
		require: true
	}
})

const model = mongoose.model("AntiRaid", ProteccionSchema)

console.log(chalk.green('Base de datos cargada: AntiRaid'))

module.exports = model;