const client = require('../index');
const schema = require('../models/custom-commands');
const PrefixSchema = require('../models/prefixes');
const blacklist = require('../models/blacklist');
const guildblacklist = require('../models/blacklist2');
const premiumSchema = require('../models/premium');
const premiumGuildSchema = require('../models/premiumGuild');
const { Collection } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms');
const premium = require('../models/premium');


client.on("messageCreate", async (message) => {
    try {
    if(message.author.bot) return;
    if(!message.guild) return;
    let prefix;
    let data0 = await PrefixSchema.findOne({
        guildID: message.guild.id
    })
    if(data0 === null) {
        prefix = "AR!"
    } else {
        prefix = data0.newPrefix
        console.log(data0.newPrefix)
    }
    if(!message.member) message.member = await message.guild.fetchMember(message);

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`)
     
   

    if(!prefixRegex.test(message.content)) return;
	
	
    blacklist.findOne({ id : message.author.id }, async(err, data) => {
		if(err) throw err
		if(!data) {

    const [, matchedPrefix] = message.content.match(prefixRegex);


        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/g);
 
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const data2 = await schema.findOne({ Guild: message.guild.id, Command: cmd })
    if(data2) message.reply(data2.Response)
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) { 
        // if(message.guild.id == '932467393932963891') return message.reply('Los comandos estan desabilitados en este servidor para configurar los eventos')
        let userPermissions = command.userPermissions;
        let botPermissions = command.botPermissions;
		if(!message.member.permissions.has(userPermissions || [])) return message.reply(`No tienes permisos para ejecutar este comando.\n Uno de estos permisos puede faltar: \`${typeof userPermissions === 'string' ? userPermissions : userPermissions.join(', ')}\``)
		if(!message.guild.me.permissions.has(botPermissions || [])) return message.reply(`No tengo permisos para ejecutar este comando.\n Uno de estos permisos puede faltar: \`${typeof botPermissions === 'string' ? botPermissions : botPermissions.join(', ')}\``)
		const blacklisted = await guildblacklist.findOne({ Server: message.guild.id });
			if(blacklisted) return message.reply('El servidor esta bloqueado en el bot por decisión de el Staff, si crees que fue un error contacta a El Turbinas#0992')
            if(command.premium) {
                premium.findOne({ User: message.author.id }, async(err, data) => {
                    if(!data) return message.reply({ content: 'Necesitas ser un usuario premium del bot' })
                    if(!data.Permanent && Date.now() > data.Expire) {
                        data.delete();
                        message.reply({ content: 'El sistema premium a caducado'})
                    }
                    if(command.timeout) {
                        if(Timeout.has(`${command.name}${message.author.id}`)) return message.reply({ content: `Tienes que esperar ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true} )}`})
                           command.run(client, message, args)
                            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
                            setTimeout(() => {
                            Timeout.delete(`${command.name}${message.author.id}`)
                            }, command.timeout)
                        }
                            return command.run(client, message, args)  
             
                        })
            } 
            
            if(command.GuildPremium) {
                premiumGuildSchema.findOne({ Guild: message.guild.id }, async(err, data) => {
                    if(!data) return message.reply({ content: 'El comando solo se puede usar en un servidor premium'})
                    if(!data.Permanent && Date.now() > data.Expire) {
                        data.delete();
                        message.reply({ content: 'El sistema premium del servidor a caducado'})
                    }
                    if(command.timeout) {
                        if(Timeout.has(`${command.name}${message.author.id}`)) return message.reply({ content: `Tienes que esperar ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true} )}`})
                        command.run(client, message, args)
                        Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
                        setTimeout(() => {
                            Timeout.delete(`${command.name}${message.author.id}`)
                        }, command.timeout)
                    }
                        return command.run(client, message, args)  
         
                    })

                } else {
            
            if(command.timeout) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.reply({ content: `Tienes que esperar ${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long: true} )}`})
                command.run(client, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.timeout)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.timeout)
            }
                command.run(client, message, args)  
 
			}}
		} else {
			message.reply('Estas bloqueado de el bot')
		}
	})

    
    } catch (err) {
        console.log(err)
        message.reply({ content: `${err}` })
    }
});