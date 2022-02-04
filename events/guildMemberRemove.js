const client = require('../index.js')

client.on("guildMemberRemove", async member => {
    let canal = client.channels.cache.get('824784855908483142'); 
    canal.send(`${member.user}, a dejado el servidor ${member.guild.name}.`);
   
});