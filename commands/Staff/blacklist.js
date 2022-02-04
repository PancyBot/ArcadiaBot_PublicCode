const Discord = require('discord.js');
const blacklist = require('../../models/blacklist')
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "blacklist",
  category: 'developer',
  description: 'añade un usuario a la blacklist',
  aliases: ["bl", 'bloquear'],
  usage: '<UserID>',

 async run (client, message, args) {
        if(message.author.id !== '711329342193664012') return message.reply('Solo el dueño puede usar este comando.')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.reply('Usuario no valido.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.reply(`**${User.displayName}** Ya estaba bloqueado!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.reply(`${User.user.tag} Fue bloqueado de el bot.`)
            }
           
        })
 }

} 