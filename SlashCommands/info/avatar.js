const { Client, CommandInteraction, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'avatar', 
    description: 'Muestra tu avatar o el de otra persona',
    options: [
        {
            name: 'user',
            description: 'Usuario del que quieres ver el avatar',
            type: ['USER'],
            required: false,
        },
    ],
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[0]} args 
     */
    run: async(client, interaction, args) => {
    try {        
        let user = interaction.options.getUser('user')
        if(!user) {
            user = interaction.user
        }
        if(user.bot) return interaction.followUp({ content: 'Menciona a alguien que no sea un bot', })

        const EmbedAvatar = new MessageEmbed()
        .setTitle(`Avatar de ${user.tag}`)
        .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`Pedido por ${interaction.user.tag}`)


        interaction.followUp({ embeds: [EmbedAvatar], ephemeral: true })
    } catch (err) {
        interaction.followUp({ content: err.toString, ephemeral: true })
        const error = err
        console.log(error)
    }
   }
}