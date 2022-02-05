const { MessageEmbed, Message, Client } = require('discord.js')
const megadb = require('megadb')
const db = new megadb.crearDB('mute_timeout', 'mutes')

module.exports = {
    name: 'unmute',
    userPermissions: ['MANAGE_MESSAGES'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[0]} args
     */
    async run (client, message, args) {
        try {
            const { guild } = message
            const user = message.mentions.members.first() || guild.members.cache.get(args[0])
            const reason = args.slice(1).join(' ') ?? 'No definida'
            if(!user) return message.reply('Pon una ID valida o menciona a alguien')
            console.log(1)
            const isMuted = db.obtener(`${guild.id}-${user.id}-isMuted`, '-') 
            console.log(1)
            console.log(isMuted)
            if(isMuted) {
                console.log(1)
                const role = message.guild.roles.cache.find(role => role.name === 'Silenciado')
                console.log(1)
                if(!role) return message.reply('El usuario no puede estar muteado puesto que el rol Silenciado no existe')
                if(!user.roles.cache.has(role.id)) {
                    console.log(1)
                    await db.eliminar(`${guild.id}.${user.id}`)
                    return message.reply('El usuario si estaba muteado pero no tiene el rol Silenciado, se elimino de la base de datos el mute')
                }
                console.log(1)
                user.roles.remove(role).catch(err => {
                    return message.reply({ content: `Ocurrio un error ${err}` })
                })
                console.log(1)
                db.eliminar(`${guild.id}.${user.id}`)
                console.log(1)
                
                const guildStaff = client.guilds.cache.get('834149327345549383')
                const MuteLogs = guildStaff.channels.cache.get('834149620937523240')
                const DeletedMute = new MessageEmbed()
                .setTitle('Nuevo unmute')
                .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true })})
                .setDescription(`**Un usuario a sido desmuteado** \nUsuario desmuteado: ${user.displayName}\nModerador: <@${message.author.username}>\nRazon: \`${reason}\``)
                .setFooter({ text: user.displayName, iconURL: user.avatarURL({ dynamic: true })})
                .setColor('YELLOW')
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setTimestamp()
                console.log(1)
    
                MuteLogs.send({ embeds: [DeletedMute] })
                message.reply({ embeds: [DeletedMute]})
                console.log(1)
            }  else {
                message.reply({content: 'El usurio no esta muteado'})
                console.log('1')
            }
        } catch (err) {
            message.reply({ content: `${err}`})
        }
    }   
}