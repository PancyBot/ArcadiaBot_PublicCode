const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");  
module.exports = { 
  name: `8ball`,
  aliases: [''],
  category: 'diversion',
  description:`preguntas`, 

  run: async (client, message, args) => {

  
	  const txt = args.join(" ") 
    let respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"] 
    var random = respuesta[Math.floor(Math.random() * respuesta.length)] 

  if (!txt) return message.reply({ content: "Coloca el texto" })

  const embed = new Discord.MessageEmbed() 
  
  .addField("A su pregunta", `${txt}`) 
  .addField("Mi respuesta", `${random}`) 
  .setColor("RANDOM") 
  message.reply({ embeds: [embed] }) 
  console.log("comando de 8ball ejecutado")
  } 
  
}