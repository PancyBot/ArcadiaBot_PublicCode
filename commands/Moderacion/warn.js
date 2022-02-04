const { Client, Message, MessageEmbed } = require('discord.js')
const warnModels = require('../../models/warnModel')

module.exports = {
    name: 'warn',
    description: 'Advierte a alguien',
    userPermissions: ['MANAGE_MESSAGES'],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message
     * @param {String[0]} args
     */

    run: async(client, message, args) => {
        if(!args[0]) return message.reply('Menciona a alguien')
		let user = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
        if(!user) return message.reply({ content: 'error'})
        const reason = args.slice(1).join(' ') || 'Razon no definida'
        if(!reason) return message.reply('error')
        if(reason.length > 1800) return message.reply({ content: 'La razón no puede pasar los 1800 caracteres'})

        new warnModels({
            userId: user.id,
            guildId: message.guildId,
            moderatorId: message.author.id,            
            reason,
            timestamp: new Date(),
        }).save().catch(e => {
            console.log(e)
        })

        user.send(`Fuiste advertido en ${message.guild.name} con la razón: \`${reason}\``).catch(console.log)

        message.reply({ content: `${user} fue advertido/a con la razón: \`${reason}\`` })
    }
}