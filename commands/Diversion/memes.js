const Discord = require('discord.js');
const meme = require('discord-memes');

module.exports = {
  name: 'memes',
  description: 'comedia',

  async run (client, message, args) { 
const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage(meme.imagenesEspañol()) //el body de data contiene diferentes cosas pero para obtener la imagen necesitamos "url"
message.reply({ embeds: [embed] }) 
  }
}