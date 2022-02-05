const client = require('../index')
const fs = require('fs')
const megadb = require('megadb')
const db = new megadb.crearDB('mute_timeout', 'mutes')
const { MessageEmbed } = require('discord.js')
client.on('ready', async() => {
    try {
        client.users.cache.forEach(async x => {
            if(client.guilds.cache.get('741489702963773501').members.cache.get(x.id)) {
                const guild = client.guilds.cache.get('741489702963773501')
                const member = guild.members.cache.get(x.id)
                try {
                    const DateNow = await db.obtener(`${guild.id}-${member.id}-DateNow`, '-') ?? 0
                    const isMuuted = await db.obtener(`${guild.id}-${member.id}-isMuted`, '-') ?? false
    

                    if(isMuuted === true) {
                        if(DateNow > Date.now()) {
                            const guildStaff = client.guilds.cache.get('834149327345549383')
                            const MuteLogs = guildStaff.channels.cache.get('834149620937523240')
                            const DeletedMute = new MessageEmbed()
                            .setTitle('Nuevo unmute')
                            .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ dynamic: true })})
                            .setDescription(`**Un usuario a sido desmuteado** \nUsuario desmuteado: ${member.displayName}\nModerador: <@${client.user.id}>\nRazon: \`Tiempo de mute expirado (Evento ready)\``)
                            .setFooter({ text: member.displayName, iconURL: member.avatarURL({ dynamic: true })})
                            .setColor('YELLOW')
                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                            .setTimestamp()

                            MuteLogs.send({ embeds: [DeletedMute] })
                            member.roles.remove('788409172110475264', { reason: 'Mute expirado' })
                            db.eliminar(`${guild.id}.${member.id}`)
                        } else { 
                            console.log('El mute aun no acaba' + x.tag)
                        }
                    } else { 
                        console.log('El usurio no esta muted' + x.tag)
                    }
                } catch (err) {
                    console.error(err)
                }
            } else { 
                console.log('El usuario no esta en el servidor' + x.tag)
            }
        })
        setInterval(() => {
            client.users.cache.forEach(async x => {
                if(client.guilds.cache.get('741489702963773501').members.cache.get(x.id)) {
                    const guild = client.guilds.cache.get('741489702963773501')
                    const member = guild.members.cache.get(x.id)
                    try {
                        const DateNow = await db.obtener(`${guild.id}-${member.id}-DateNow`, '-') ?? 0
                        const isMuuted = await db.obtener(`${guild.id}-${member.id}-isMuted`, '-') ?? false
        
                        if(isMuuted === true) {
                            if(DateNow > Date.now()) {
                                const guildStaff = client.guilds.cache.get('834149327345549383')
                                const MuteLogs = guildStaff.channels.cache.get('834149620937523240')
                                const DeletedMute = new MessageEmbed()
                                .setTitle('Nuevo unmute')
                                .setAuthor({ name: client.user.username, iconURL: client.user.avatarURL({ dynamic: true })})
                                .setDescription(`**Un usuario a sido desmuteado** \nUsuario desmuteado: ${member.displayName}\nModerador: <@${client.user.id}>\nRazon: \`Tiempo de mute expirado\``)
                                .setFooter({ text: member.displayName, iconURL: member.avatarURL({ dynamic: true })})
                                .setColor('YELLOW')
                                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                                .setTimestamp()
        
                                MuteLogs.send({ embeds: [DeletedMute] })
                                member.roles.remove('788409172110475264', { reason: 'Mute expirado' })
                                db.eliminar(`${guild.id}.${member.id}`)
                            } else { 
                                console.log('El mute aun no acaba')
                            }
                        } else { 
                            console.log('El usuario no esta muted' + x.tag)
                        }
                    } catch (err) {
                        console.error(err)
                    }
                } else { 
                    console.log('El usuario no esta en el servidor')
                }
            })
        }, 5 * 60 * 1000)

    } catch (err) {
        console.error(err)
    }
})