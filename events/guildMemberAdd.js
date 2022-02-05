
const megadb = require('megadb')
const client = require('../index')
const staffs = new megadb.crearDB('staffs', 'info')
const db = new megadb.crearDB('mute_timeout', 'mutes')

client.on("guildMemberAdd", async member => {
	console.log('Tremendo')
	let mutecanal = client.channels.cache.get('834149620937523240')
    let canal = client.channels.cache.get('824784855908483142'); 
	let usuario = member.guild.members.cache.get(member.id)
	        const role = member.guild.roles.cache.find(role => role.name === 'Silenciado')
        if(!role) {
            try {
                mutecanal.send('Rol Silenciado no encontrado creando uno.')

                let muterole = await member.guild.roles.create({
                    data : {
                        name : 'Silenciado',
                        permissions: []
                    }
                });
                member.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                mutecanal.send('Rol Silenciado creado.')
            } catch (error) {
                console.log(error)
            }
        };
  
   if(member.guild.id == "741489702963773501") {
   let mute = await db.get(`${member.guild.id}-${member.id}-isMuted`, '-') ?? false

   if(mute === false) {
	      
		   canal.send(`Hola ${member.user}, bienvenido a ${member.guild.name}, lee los canales <#776846470572671056> y <#815429769700442132> para no ser sancionado y la ip esta en <#815648527450767460>.`);
		    usuario.send(`Hola ${member.user}, bienvenido a ${member.guild.name}, lee los canales <#776846470572671056> y <#815429769700442132> para no ser sancionado y la ip esta en <#815648527450767460>.`).catch(error => {
				console.log(`${member.user} Tiene el dm cerrado`)
			})
   } else if(mute === true) {
        let role2 = member.guild.roles.cache.find(r => r.name === 'Silenciado')
	await usuario.roles.add(role2)
     const muteEmbed = new Discord.MessageEmbed()
	 .setTitle('Nuevo mute')
	 .setDescription(`**Un usuario fue muteado**\nUsuario Muteado: ${member.user}\nModerador: <@777714535624605726>\nRazon: \`Evadir mute\``)
     
	 usuario.send(muteEmbed).catch(e => {
		 mutecanal.send('No le puedo emviar mensajes a este usuario')
	 })
	 mutecanal.send(muteEmbed)
   }
   } else if(member.guild.id == "758502115953344513") {

   } else if(member.guild.id == "756617089988690001") {

   } else if(member.guild.id == "755470578043060426") {

   } else if(member.guild.id == "834149327345549383") {
	   console.log(`${member.id} entro a el servidor de staffs`)
	   if(member.bot) return;
	  if(staffs.tiene(member.id)) return usuario.send('Bienvenido a el servidor privado de los staffs de discord, no filtres la invitacion o te vas ban')
	  usuario.send('No tienes los permisos de estar en el servidor privado de los staffs, fuiste baneado de Arcadia - Staff Discord')
	  let member2 = await client.users.fetch(member.id)
member.guild.members.ban(member2.id).catch(e => {
    const embederror = new Discord.MessageEmbed()
     .setTitle('Error')
     .setDescription(`Un error ocurrio \`${e}\` `)

     mutecanal.send(embederror)
     console.log(`Un error ocurrio ${e}`)
     }) 

	 mutecanal.send(new Discord.MessageEmbed()
        .setColor('PURPLE')
        .setTitle(`Usuario Baneado`)
        .addField('Usuario:', `${member2.tag}`)
        .addField('ID del Usuario:', `${member2.id}`)
				.addField('Razon:',`Entrar a el servidor de staffs`)
        .addField('Moderador:', `Arcadia Roleplay Bot`)
        .addField('MOD ID:',`777714535624605726`)
		.addField('Servidor', `${member.guild.name}`)
        .setTimestamp() 
				)

   }
});

