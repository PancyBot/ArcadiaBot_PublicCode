const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'test de los comandos', 

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[0]} args 
     */

    run: async(client, interaction, args) => {
        if(!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.followUp({ content: 'ñ', ephemeral: false })
        interaction.followUp({ content: 'o' })
    }
}