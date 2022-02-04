const { Client, CommandInteraction, MessageEmbed } = require('discord.js')
const warnModels = require('../../models/warnModel')

module.exports = {
    name: 'warn',
    description: 'Advierte a alguien',
    userPermissions: ['MANAGE_MESSAGES'],
    options: [
        {
            name: 'user',
            description: 'Usuario al que quieres advertir',
            type: 'USER',
            required: true,
        },
        {
            name: 'razón',
            description: 'Razón de la advertencia',
            type: 'STRING',
            required: false,
        }
    ],

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async(client, interaction) => {
		try {
        const user = interaction.options.getUser('user')
        const reason = interaction.options.getString('razón') || 'Razon no definida'
        const member = interaction.guild.members.cache.get(user.id)


        if(reason.length > 1800) return interaction.followUp({ content: 'La razón no puede pasar los 1800 caracteres', ephemeral: true })

        new warnModels({
            userId: user.id,
            guildId: interaction.guildId,
            moderatorId: interaction.user.id,            
            reason,
            timestamp: new Date(),
        }).save().catch(e => {
            console.log(e)
        })
		const WarnEmbed = new MessageEmbed()
		.setTitle('Nueva advertencia')
		.addField('Usuario advertido:', user.username)
		.addField('Moderador:', interaction.user.username)
		.addField('Razón:', reason)
		.setColor('YELLOW')
		.setTimestamp()

		client.channels.cache.get('834149620937523240').send({ embeds: [WarnEmbed] })
        user.send(`Fuiste advertido en ${interaction.guild.name} con la razón: \`${reason}\``).catch(console.log)

        interaction.followUp({ content: `${user} fue advertido/a con la razón: \`${reason}\``, ephemeral: false })
		} catch (err) {
			interaction.followUp({ content: `${err}`})
		}
    }
}