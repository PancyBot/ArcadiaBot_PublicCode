const Discord = require('discord.js')
const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'apelar',
    description: 'Apela un baneo de MC',
    options: [
        {
            name: 'gamertag',
            description: 'Escribe tu gamertag',
            type: 'STRING',
            required: true,
        },
        {
            name: 'apelacion',
            description: 'Escribe tu apelacion',
            type: 'STRING',
            required: true,
        },
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async(client, interaction) => {

            const apelacion = interaction.options.getString('apelacion')
            const gamertag = interaction.options.getString('gamertag')
            		
		const embede1 = new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `Falta un gamertag`\nForma de uso del comando: `AR!apelar {gamertag} {apelacion}`')
		.setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
		.setFooter(interaction.guild.name, interaction.guild.iconURL())
		.setColor('RED')
  	    .setTimestamp()
		
		const embede2 = new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `Falta el motivo de la apelacion`\nUso del comando: `AR!apelar {gamertag} {apelacion}`')
 	    .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
		.setFooter(interaction.guild.name, interaction.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		if(!gamertag) return interaction.followUp({ embeds: [embede1], ephemeral: true })
		if(gamertag.length > 25) return interaction.followUp({ content: 'Gamertag muy largo', ephemeral: true })
		if(!apelacion) return interaction.followUp({ embeds: [embede2], ephemeral: true})
		if(apelacion.length < 75) return interaction.followUp({ embeds: [new MessageEmbed()
		.setTitle('Error')
		.setDescription('Un errror a ocurrido al intentar mandar la apelacion\nError: `El motivo tiene que tener mas de 75 caracteres`\nUso del comando: `AR!apelar {gamertag} {apelacion}`')
 	    .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
		.setFooter(interaction.guild.name, interaction.guild.iconURL())
		.setColor('RED')
		.setTimestamp()], ephemeral: true}
		)
		if(apelacion.length > 1024) return interaction.followUp({ content: 'Demaciado larga la apelacion', ephemeral: true})
		const canal = client.channels.cache.get('880133475783557170');
	    
		const a = new MessageEmbed()
		.setTitle('Apelacion enviada')
		.setDescription(' > Tu apelacion se a enviado al servidor del Staff, se te enviara un DM con la respuesta de tu apelacion, Recuerda que el mal uso de este comando puede hacer que seas bloqueado del bot\n\n\n**Si tu apelacion tiene demasiadas faltas de ortografia sera rechazada**')
 	    .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
		.setFooter(interaction.guild.name, interaction.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		const b = new MessageEmbed()
		.setTitle('Nueva apelacion')
		.addField('Gamertag', `${gamertag}`)
		.addField('Motivo de la apelacion', `${apelacion}`)
		.addField('ID del usuario', interaction.user.id)
 	    .setAuthor(interaction.user.username, interaction.user.displayAvatarURL())
		.setFooter(interaction.guild.name, interaction.guild.iconURL())
		.setColor('RED')
		.setTimestamp()

		interaction.followUp({ embeds: [a], ephemeral: true })
		canal.send({ embeds: [b]})

    }
}