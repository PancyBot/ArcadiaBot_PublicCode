const warnModel = require('../../models/warnModel'); 
const { Client, Message } = require('discord.js')

module.exports = {
    name: 'remove-warn',
    description: 'Quita 1 advertencia',
    userPermissions: ['MANAGE_MESSAGES'],

    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args
     */

    run: async(client, message, args) => {
		try {
        const warnId = args[0]

        const data = await warnModel.findById(warnId)

        if(!data) return message.reply({ content: `${warnId} no es una ID valida`})

        data.delete();

        const user = message.guild.members.cache.get(data.userId);
        return message.reply({ content: `Se elimino 1 advertencia de ${user}`})
		} catch (err) {
			message.reply({ content: `${err}`})
		}
    }
}