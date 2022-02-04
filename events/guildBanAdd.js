const client = require('../index')

client.on("guildBanAdd", (member) => {
    let canal = client.channels.cache.get('824784855908483142');
    canal.send(`${member.user} Fue baneado de el servidor`)
})