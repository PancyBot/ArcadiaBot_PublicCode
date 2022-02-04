const warnModel = require('../../models/warnModel'); 
const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    name: 'remove-warn',
    description: 'Quita 1 advertencia',
    userPermissions: ['MANAGE_MESSAGES'],
    options: [
        {
            name: 'warnid',
            description: 'ID de la advertencia',
            type: 'STRING',
            required: true,
        }
    ],

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async(client, interaction) => {
		try {
        const warnId = interaction.options.getString('warnid')

        const data = await warnModel.findById(warnId)

        if(!data) return interaction.followUp({ content: `${warnId} no es una ID valida`})

        data.delete();

        const user = interaction.guild.members.cache.get(data.userId);
        return interaction.followUp({ content: `Se elimino 1 advertencia de ${user}`})
		} catch (err) {
			interaction.followUp({ content: `${err}`})
		}
    }
}