const Discord = require('discord.js')

module.exports = {
	name: 'say',
	category: 'diversion',
	usage: '<texto>',
	description: 'Hacer que el bot diga algo',

	run: async(client, message, args) => {
		   let permisos = message.channel.permissionsFor(message.member);
   message.delete() 
   const texto = args.join(" ")
   if(!texto) return message.reply({ content: 'Pon lo que quieres que diga el bot'})

   message.reply({
	 content: texto,
     disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone" 
   })
} 
	}
