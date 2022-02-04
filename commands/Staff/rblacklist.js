
const Discord = require('discord.js');
const blacklist = require('../../models/blacklist')

const { Client, MessageEmbed } = require('discord.js');
module.exports = {
  name : 'rblacklist',
  description : 'axd',
  category : "developer",
  aliases : ["rbl", 'desbloquear', 'unlock'],
  usage: '<UserID>',

 run: async (client, message, args) => {
        if(message.author.id !== '711329342193664012') return message.reply('Solo el dueño puede usar este comando')
        const User = message.guild.members.cache.get(args[0])
        if(!User) return message.reply('Usuario no valido.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.reply(`**${User.displayName}** Fue desbloqueado del bot.`)
            } else {
               message.reply(`**${User.displayName}** No estaba bloqueado.`)
            }
           
        })
 }

} 