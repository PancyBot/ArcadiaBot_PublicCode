const Discord = require('discord.js')

module.exports = {
  name: `ping`,
  aliases: [''],
  category: 'utilidad',
  description: `tiempo de respuesta de el bot`,

  run: async (client, message, args) => {
    
let ping = Math.floor(message.client.ping);

message.reply(":ping_pong: Cargando.....").then(m => {  
  const embed = new Discord.MessageEmbed()
    .setDescription(
      `:speech_balloon: Ping de mensajes: \`${m.createdTimestamp -
        message.createdTimestamp} ms\`\n :satellite_orbital: Ping DiscordAPI: \` ${client.ws.ping}  ms\``
    )  
    .setColor("RANDOM");

  m.edit({ embeds: [embed]}); 
})
  }

}