const warnModel = require('../../models/warnModel');
const moment = require('moment');
const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'warnings',
    description: 'Lista de warns',
    options: [
        {
            name: 'user',
            description: 'Warns de un usuario especifico',
            type: 'USER',
            required: false,
        }
    ],

    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;

        const userWarns = await warnModel.find({
             userId: user.id, 
             guildId: interaction.guildId,
        });

        if(!userWarns?.length) return interaction.followUp({ content: `${user} no tiene advertencias en el servidor`})

        const EmbedDescription = userWarns.map((warn) => {
            const moderator = interaction.guild.members.cache.get(warn.moderatorId);

            return [
                `warnId: ${warn._id}`,
                `Moderador: ${moderator || 'El moderador salio del servidor'}`,
                `Fecha: ${moment(warn.timestamp).format("MMMM Do YYYY")}`,
                `Razón: ${warn.reason}`
            ].join('\n');
        }).join('\n\n');

        const embed = new MessageEmbed()
        .setTitle(`Warns de ${user.tag}`)
        .setDescription(EmbedDescription)
        .setColor('RANDOM');

        interaction.followUp({ embeds: [embed]  })

    }
}