const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const embed = new MessageEmbed()
      .setDescription(`:satellite_orbital: Ping DiscordAPI: \` ${client.ws.ping}  ms\``)  
      .setColor("RANDOM");
  

        interaction.followUp({ embeds: [embed] }).catch(err => {
          console.log(err)
        })
    },
};