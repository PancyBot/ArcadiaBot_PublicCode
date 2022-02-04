const client = require('../index')
const megadb = require('megadb')
const db = new megadb.crearDB('mute_timeout', 'info')
client.on('ready', async() => {
    client.users.cache.forEach(x => {
        if(client.guilds.cache.get('741489702963773501').members.cache.get(x.id)) {
            const guild = client.guilds.cache.get('741489702963773501')
            const member = guild.members.cache.get(x.id)
            try {
                const DateNow = db.obtener(`${guild.id}.${member.id}.DateNow`) ?? 0
                if(DateNow > Date.now()) {
                    member.roles.remove('788409172110475264', { reason: 'Mute expirado' })
                    db.eliminar(`${guild.id}.${member.id}`)
                } else {
                    console.log('El usuario no esta muteado')
                }
            } catch (err) {
                console.error(err)
            }
        } else {
            console.log('El usuario no esta en el servidor')
        }
    })
    setInterval(() => {
        client.users.cache.forEach(x => {
            if(client.guilds.cache.get('741489702963773501').members.cache.get(x.id)) {
                const guild = client.guilds.cache.get('741489702963773501')
                const member = guild.members.cache.get(x.id)
                try {
                    const DateNow = db.obtener(`${guild.id}.${member.id}.DateNow`) ?? 0
                    if(DateNow > Date.now()) {
                        member.roles.remove('788409172110475264', { reason: 'Mute expirado' })
                        db.eliminar(`${guild.id}.${member.id}`)
                    } else {
                        console.log('El usuario no esta muteado')
                    }
                } catch (err) {
                    console.error(err)
                }
            } else {
                console.log('El usuario no esta en el servidor')
            }
        })
    }, 5 * 60 * 1000)
})