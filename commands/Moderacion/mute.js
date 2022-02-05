const { MessageEmbed, Message, Client } = require('discord.js')
const megadb = require('megadb')
const db = new megadb.crearDB('mute_timeout', 'mutes')


module.exports = {
    name: 'mute',
    userPermissions: ['MANAGE_MESSAGES'],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */
    run: async(client, message, args) => {
        try {
            const { guild } = message
            const member = message.mentions.members.first() || guild.members.cache.get(args[0])
            const reason = args.slice(1).join(' ') ?? 'Razón no definida'
    
            if(!member) return message.reply('Pon una ID valida o menciona a alguien')
            
           
    
            if(member.id === message.author.id) return message.reply("No puedes silenciarte");
              const role = message.guild.roles.cache.find(role => role.name === 'Silenciado')
             if(!role) {
                 try {
                     message.channel.send('Rol Silenciado no encontrado creando uno.')
     
                     let muterole = await message.guild.roles.create({
                         data : {
                             name : 'Silenciado',
                             permissions: []
                         }
                     });
                     message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                         await channel.createOverwrite(muterole, {
                             SEND_MESSAGES: false,
                             ADD_REACTIONS: false
                         })
                     });
                     message.channel.send('Rol Silenciado creado.')
                 } catch (error) {
                     console.log(error)
                 }
             };
            
            const role2 = message.guild.roles.cache.find(r => r.name === 'Silenciado')
            if(member.roles.cache.has(role2.id)) return message.channel.send(`${member.username} Ya estaba muteado.`)
            member.roles.add(role2).catch(e => {
                return message.reply(`Un error ocurrio : \`${e}\``)
            }); 
            
            const embedmute = new MessageEmbed()
            .setTitle('Nuevo Mute')
            .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL({ dynamic: true })})
            .setDescription(`**Un usuario a sido muteado** \nUsuario muteado: ${member}\nModerador: <@${message.author.id}>\nRazon: \`${reason}\``)
            .setFooter({ text: member.displayName, iconURL: member.avatarURL({ dynamic: true })})
            .setColor('YELLOW')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()
    
            await message.reply({ embeds: [embedmute] })
            member.send({ embeds: [embedmute] }).catch(e => {
                message.channel.send('El usuario no tiene el dm abierto')
            })
    
            await db.establecer(`${guild.id}.${member.id}`, {
                isMuted: true,
                Date: 0,
            })
        } catch (err) {
            message.reply({ content: `${err}` })
            console.error(err)
        }
    }
}