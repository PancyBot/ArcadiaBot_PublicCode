const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ban',
	description: 'banea a alguien',

	run: async(client, message, args) => {
				message.delete()


const canal = client.channels.cache.get('834149620937523240')
const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(message.guild.name, message.guild.iconURL())

    
if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.')  
    embed.setColor('RED')
    return message.reply({ embeds: [embed] }).then(m => m.delete({ timeout: 3000 }))
}
 
let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.')  
    embed.setColor('RED')
    return message.reply({ embeds: [embed] })
}
 
if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.')  
    embed.setColor('RED')
    return message.reply({ embeds: [embed] })
}

if (message.guild.members.resolve(member.id)) {  
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No pudes banear a un usuario mayor o del mismo rango que tú.') 
        embed.setColor('RED')
        return message.reply({ embeds: [embed] })
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario')  
        embed.setColor('RED')
        return message.reply({ embeds: [embed] })
    }
} 
let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"  
message.guild.members.ban(member.id, { reason: `${message.author.tag} - ${razon}` })
embed
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTitle('Baneo exitoso ')
    .addField(`> Usuario Baneado`, !!member.user ? member.user.tag : member.tag)
    .addField('> Razón:', razon)
    .setColor('AQUA')
    .setTimestamp()


   message.channel.send({ embeds: [embed] }) 
   if (!!member.user) member.user.send({ embeds: [embed.addField('> Formulario para apelar', '[Link](https://forms.gle/pEb5undZmR3eHnFo9)')] }).catch(e => e);
   canal.send({ embeds: [embed]})

   }
	}
