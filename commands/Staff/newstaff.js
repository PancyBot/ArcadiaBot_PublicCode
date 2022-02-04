const Discord = require('discord.js');
const db = require('megadb');
const staffs = new db.crearDB('staffs','info')

module.exports = {
	name:'newstaff',
	description:'agrega un nuevo staff',

	run: async(client, message, args) => {
		  var id = ["711329342193664012", "723599476605845524", "727021390686978061", "796650479673147422"] 
	
  if(!id.some(id => message.author.id == id)) return message.reply('No puedes usar este comando!') 
	
  let user = message.mentions.members.first();
	
  if(!user) return message.reply ('Debes mencionar a alguien!')  
    if(staffs.has(user.id)) return message.reply("Este usuario ya estaba registrado.")  

  staffs.establecer(user.id, user.user.tag)
  message.reply(`Todo ha salido bien, el usuario ${user} fue añadido al staff`)  
 
	}
}