const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    description: "el bot dice lo que quieras",
    options: [
        {
            name: 'message',
            description: 'Cual va a ser el contenido del mensaje',
            type: 'STRING',
            required: true,
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [ message ] = args;
        let permisos = interaction.channel.permissionsFor(interaction.member);
        console.log(message)
        console.log((message, {
            disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone" 
          }))
        interaction.followUp({ content: message, disableMentions: permisos.has("MENTION_EVERYONE") ? "none" : "everyone"})

    },
};