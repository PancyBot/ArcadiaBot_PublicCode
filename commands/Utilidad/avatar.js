const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
const db = require('megadb'); //Definimos db
let blacklist = new db.crearDB('blacklist'); //Definimos la blacklist
 
module.exports = {
  name: `avatar`, 
  aliases: ['av'],
  description: `avatar de el usuario`,

  run: async (client, message, args) => { 
 
      const Discord = require("discord.js")
 
 
if(message.author.bot) return;  
let miembro = message.mentions.users.first()  
if (!miembro) {  
const embed = new Discord.MessageEmbed()
    .setImage(`${message.author.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${message.author.tag}`);
    
message.reply({ embeds: [embed]});

} else {  
const embed = new Discord.MessageEmbed()
    .setImage(`${miembro.displayAvatarURL({dynamic: true, size : 1024 })}`)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${miembro.tag}`);

message.reply({ embeds: [embed]});

}} 
}