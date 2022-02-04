const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'apelar',
	category: 'utilidad',

	run: async(client, message, args) => {
		
		const embede1 = new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `Falta un gamertag`\nForma de uso del comando: `AR!apelar {gamertag} {apelacion}`')
		.setAuthor(message.author.username, message.author.displayAvatarURL())
		.setFooter(message.guild.name, message.guild.iconURL())
		.setColor('RED')
  	    .setTimestamp()
		
		const embede2 = new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `Falta el motivo de la apelacion`\nUso del comando: `AR!apelar {gamertag} {apelacion}`')
 	    .setAuthor(message.author.username, message.author.displayAvatarURL())
		.setFooter(message.guild.name, message.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		const gamertag = args[0]
		if(!gamertag) return message.reply({ embeds: [embede1]})
		const apelacion = args.slice(1).join(' ')
		if(gamertag.length > 25) return message.reply('Gamertag muy largo')
		if(!apelacion) return message.reply({embeds: [embede2]})
		if(apelacion.length < 75) return message.reply({embeds: [new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `El motivo tiene que tener mas de 75 caracteres`\nUso del comando: `AR!apelar {gamertag} {apelacion}`')
 	    .setAuthor(message.author.username, message.author.displayAvatarURL())
		.setFooter(message.guild.name, message.guild.iconURL())
		.setColor('RED')
		.setTimestamp()]}
		)
		if(apelacion.length > 1024) return message.reply('Demaciado larga la apelacion')
		const canal = client.channels.cache.get('880133475783557170');
	    
		const a = new MessageEmbed()
		.setTitle('Apelacion enviada')
		.setDescription(' > Tu apelacion se a enviado al servidor del Staff, se te enviara un DM con la respuesta de tu apelacion, Recuerda que el mal uso de este comando puede hacer que seas bloqueado del bot\n\n\n**Si tu apelacion tiene demasiadas faltas de ortografia sera rechazada**')
 	    .setAuthor(message.author.username, message.author.displayAvatarURL())
		.setFooter(message.guild.name, message.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		const b = new MessageEmbed()
		.setTitle('Nueva apelacion')
		.addField('Gamertag', `${gamertag}`)
		.addField('Motivo de la apelacion', `${apelacion}`)
		.addField('ID del usuario', message.author.id)
 	    .setAuthor(message.author.username, message.author.displayAvatarURL())
		.setFooter(message.guild.name, message.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		message.reply({embeds: [a]})
		canal.send({embesd: [b]})


	}
}