const { MessageEmbed, Message, Client } = require('discord.js')
const megadb = require('megadb')
const db = new megadb.crearDB('mutes_timeout', 'info')

module.exports = {
    name: 'unmute',
    userPermissions: ['MANAGE_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[0]} args
     */
    async run (client, message, args) {
        const { guild } = message
        const user = message.mentions.members.first() || guild.members.cache.get(args[0])
        const reason = args.slice(1).join(' ') ?? 'No definida'
        if(!user) return message.reply('Pon una ID valida o menciona a alguien')

        const isMuted = await db.obtener(`${guild.id}.${user.id}.isMuted`) ?? false
        if(isMuted === true) {
            const role = message.guild.roles.cache.find(role => role.name === 'Silenciado')
            if(!role) return message.reply('El usuario no puede estar muteado puesto que el rol Silenciado no existe')
            if(!member.roles.cache.has(role.id)) {
                await db.eliminar(`${guild.id}.${user.id}`)
                return message.reply('El usuario si estaba muteado pero no tiene el rol Silenciado, se elimino de la base de datos el mute')
            }
            await user.roles.remove(role).catch(err => {
                return message.reply({ content: `Ocurrio un error ${err}` })
            })
            db.eliminar(`${guild.id}.${user.id}`)
            
            const guildStaff = client.guilds.cache.get('834149327345549383')
            const MuteLogs = guildStaff.channels.cache.get('834149620937523240')
            const DeletedMute = new MessageEmbed()
            .setTitle('Nuevo unmute')
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true })})
            .setDescription(`**Un usuario a sido desmuteado** \nUsuario desmuteado: ${user.displayName}\nModerador: <@${message.author.username}>\nRazon: \`${reason}\``)
            .setFooter({ name: user.displayName, iconURL: user.avatarURL({ dynamic: true })})
            .setColor('YELLOW')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

            MuteLogs.send({ embeds: [MuteLogs] })
            await message.reply({ embeds: [DeletedMute]})
        }
    }   
}