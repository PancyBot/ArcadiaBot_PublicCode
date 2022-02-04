const moment = require("moment"); 
require('moment-duration-format'); 
const Discord = require('discord.js')

module.exports = {
	name: 'bot-status',
	description: 'estado de el bot',

	run: async(client, message, args) => {
		
		
		const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]"); 
		message.reply('Cargando Datos...').then(m => {
		const embed = new Discord.MessageEmbed() 
		.setColor("RED") 
		.setAuthor("Informacion de Arcadia Bot", client.user.avatarURL()) 
		.addField("`Dueño`", `El Turbinas#0992`, true) 
		.addField("`Version`", `3.0.2`, true) 
		.addField("`Libreria`", `Discord ^13 (Js) - Aoi.js ^5 dev (Js)`, true) 
		.addField("`Memoria`", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
		.addField("`Uptime`", `${actividad}`, true)
		.addField("`Version de Node`", `Node v16.x`, true)
		.addField("`Ping BOT`", `\`${m.createdTimestamp -
        message.createdTimestamp} ms\``, true)
		.addField("`Ping Discord API`", `\`${client.ws.ping}ms\``, true)
		m.edit({ embeds: [embed]});
		})
		}
	}
