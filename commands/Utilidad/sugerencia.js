const Discord = require('discord.js')

module.exports = { 
  name: 'sugerencia',
  description: 'sugerencia de algo',

  async run (client, message, args) {

	  try {
        let tema = args[0]; 
        let sugerencia = args.slice(1).join(' ');  
        let canal = client.channels.cache.get('932728028885295146');

       const embederror1 = new Discord.MessageEmbed()
       .setTitle('Error')
       .setDescription(`Ocurrio un error al intentar enviar la sugerencia\n\nError: \`No se puso un tema\``)
       
       const embederror2 = new Discord.MessageEmbed()
       .setTitle('Error')
       .setDescription(`Ocurrio un error al intentar enviar la sugerencia\n\nError: \`No se puso la sugerencia\``)

        if(!tema) return message.reply({ embeds: [embederror1]});
        if(!sugerencia) return message.reply({ embeds: [embederror2]});
        const sugerenciaa = new Discord.MessageEmbed() 
        .setAuthor(`Autor: ${message.author.tag}`, message.author.displayAvatarURL())

        .setDescription(`**Tema:** ${tema}\n**Sugerencia:** ${sugerencia}`)
        .setColor(0xeaff00)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(`Arcadia Bot | v3.0.2  `, client.user.displayAvatarURL());
 
        message.reply("sugerencia enviada con exito!")
		 
        canal.send({ content: `<@&816543208384626698>`, embeds: [sugerenciaa]}).then(m => {
          m.react('✅')
          m.react('❔')
          m.react('❎')
       }) 
         message.delete()
		 } catch (err) {
             console.error(err)
			 message.channel.send({ content: err })
		 }
         }
         }