const Discord = require('discord.js')

module.exports = { 
  name: 'sugerencia',
  description: 'Sugiere algo',
  options: [
      {
          name: 'tema',
          description: 'Tema de la sugerencia',
          type: 'STRING',
          required: true,
      },
      {
          name: 'sugerencia',
          description: 'Sugerencia',
          type: 'STRING',
          required: true
      }
  ],

  async run (client, interaction, args) {
        let tema = interaction.options.getString('tema')
        let sugerencia = interaction.options.getString('sugerencia')
        let canal = client.channels.cache.get('932728028885295146');

       const embederror1 = new Discord.MessageEmbed()
       .setTitle('Error')
       .setDescription(`Ocurrio un error al intentar enviar la sugerencia\n\nError: \`No se puso un tema\``)
       
       const embederror2 = new Discord.MessageEmbed()
       .setTitle('Error')
       .setDescription(`Ocurrio un error al intentar enviar la sugerencia\n\nError: \`No se puso la sugerencia\``)

        if(!tema) return interaction.followUp({embeds: [embederror1]});
        if(!sugerencia) return interaction.followUp({embeds: [embederror2]});
        const sugerenciaa = new Discord.MessageEmbed() 
        .setAuthor(`Autor: ${interaction.user.tag}`, interaction.user.displayAvatarURL())

        .setDescription(`**Tema:** ${tema}\n**Sugerencia:** ${sugerencia}`)
        .setColor(0xeaff00)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(`Arcadia Bot | v3.0.2 `, client.user.displayAvatarURL());
 
        interaction.followUp("sugerencia enviada con exito!")
		 
        canal.send({ content: `<@&816543208384626698>`, embeds: [sugerenciaa]}).then(m => {
            m.react('✅')
            m.react('❔')
            m.react('❎')
         }) 
         }
         }