const warnModel = require('../../models/warnModel');
const moment = require('moment');
const Haastebin = require('hastebin-save')
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'warnings',
    description: 'Lista de warns',

    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[0]} args
     */

    run: async (client, message, args) => {
        const user = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || message.guild.members.cache.get(message.author.id);

        const userWarns = await warnModel.find({
             userId: user.id, 
             guildId: message.guild.id,
        });

        if(!userWarns?.length) return message.reply({ content: `${user} no tiene advertencias en el servidor`})

        const EmbedDescription = userWarns.map((warn) => {
            const moderator = message.guild.members.cache.get(warn.moderatorId);

            return [
                `warnId: ${warn._id}`,
                `Moderador: ${moderator || 'El moderador salio del servidor'}`,
                `Fecha: ${moment(warn.timestamp).format("MMMM Do YYYY")}`,
                `Razón: ${warn.reason}`
            ].join('\n');
        }).join('\n\n');

        if(EmbedDescription.length > 1750) {
            Haastebin.upload(`- - - Warns de ${user.displayName} - - -\n\n\n\n${EmbedDescription}`, link => {
                const embed = new MessageEmbed()
                .setTitle(`Warns de ${user.displayName}`)
                .setDescription(`**El usuario tiene demaciados warns, [Lista de warn](https://hastebin.com/${link}.txt)**`)
                .setColor('RANDOM');

                return message.reply({ embeds: [embed] })
            })
        } 

        const embed = new MessageEmbed()
        .setTitle(`Warns de ${user.displayName}`)
        .setDescription(EmbedDescription)
        .setColor('RANDOM');

        message.reply({ embeds: [embed]  })
    }
}