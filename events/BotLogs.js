const { MessageEmbed, MessageAttachment } = require('discord.js');
const fs = require('fs');
var SS = ["796650479673147422", "711329342193664012"];
const client = require('../index')

module.exports = async (client, other, type, failure) => {
let failureDate = new Date().toLocaleString('es-ES', { timeZone: 'America/Argentina/Buenos_Aires' });
const Embed = new MessageEmbed()
.setAuthor(client.user.tag , client.user.displayAvatarURL({format: 'png'}))
.setColor('#cc3f37')
.setDescription('He obtenido un fallo de tipo **'+type+'**\nFecha: **'+failureDate+'**\n\nPor favor, arreglarlo.');
for(var i=0;i < SS.length;i++){ 
  let user = client.users.cache.get(SS[i]); 
  try { 
    fs.writeFileSync('error.log', failure);
  } catch (e) {
    console.log(e)
    console.error('Error intentando crear archivo error.log');
  }
  let Attachment = new MessageAttachment('error.log'); 
  user.send(Embed); 
  user.send(Attachment) 
  .then(() => {
    try {
      if (fs.existsSync('error.log')) { 
        try { 
          fs.unlinkSync('error.log');
        } catch (e) { 
          console.log(e)
          console.error('Ha ocurrido un error intentando eliminar error.log');
        }
      }
    } catch (e) {
      return;
    }  
  })
  .catch(e => { 
    console.error(e);
  });
}


client.emit("logsBot", client, 'Tipo ya sea Warn o Error', 'El error que se escribirá dentro del archivo error.log', 'abueno');
 }