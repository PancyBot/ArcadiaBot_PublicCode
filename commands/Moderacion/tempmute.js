const ms = require('ms')
const { MessageEmbed, Message, Client } = require('discord.js')
const megadb = require('megadb')
const db = new megadb.crearDB('mutes_timeout', 'info')

module.exports = {
    name: 'tempmute',
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[0]} args 
     */

    async run (client, message, args) {
        const TimesValid = [
            '5m',
            '10m',
            '15m',
            '20m',
            '25m',
            '30m',
            '35m',
            '40m',
            '45m',
            '50m',
            '55m',
            '60m',
            '1h',
            '2h',
            '3h',
            '4h',
            '5h',
            '6h',
            '7h',
            '8h',
            '9h',
            '10h',
            '11h',
            '12h',
            '13h',
            '14h',
            '15h',
            '16h',
            '17h',
            '18h',
            '19h',
            '20h',
            '21h',
            '22h',
            '23h',
            '24h',
            '1d',
            '2d',
            '3d',
            '4d',
            '5d',
            '6d',
            '7d',
            '1w',
            '2w',
            '3w',
            '4w',
        ]
        const { guild } = message;
        const member = message.mentions.members.first() || guild.members.cache.get(args[0])
        if(!member) return message.reply('Menciona a alguien o pon una ID valida')
        if(!args[1]) return message.reply('Pon una fecha')
        if(!TimesValid.some(x => args[1] == x)) {
            const ValitedTimesEmbed = new MessageEmbed()
            .setTitle('Tiempos validos')
            .setDescription(`Simbologia de los resultados:\n\n \`m = Minutos\`\n\`h = Horas\`\n\`d = Dias\`\n\`w = Semanas\`\n\n\`\`\`${TimesValid.join('/n')}\`\`\``)
            .setFooter(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setColor('GREEN')

            message.reply({ content: 'El tiempo no es valido, se te enviaron al MD los formatos validos'})
            return await message.author.send({ embeds: [ValitedTimesEmbed] })
        }
        const reason = args.slice(2).join(' ') ?? 'No definida'
        const DateNow = Date.now() + ms(args[1])


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
        .setDescription(`**Un usuario a sido muteado** \nUsuario muteado: ${member}\nModerador: <@${message.author.id}>\nRazon: \`${reason}\``)

        await message.reply({ embeds: [embedmute] })
        member.send({ embeds: [embedmute] }).catch(e => {
            message.channel.send('El usuario no tiene el dm abierto')
        })

        await db.establecer(`${guild.id}.${member.id}`, {
            isMuted: true,
            Date: DateNow,
        })
    }
}