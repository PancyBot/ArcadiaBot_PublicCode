Discord = require('discord.js')

module.exports = {
  name: 'ram',
  description: 'memoria usada en el bot',

  async run (client, message, args) {
          const OS = require('os');  
const maxMemory = OS.totalmem();  
function getMemoryUsage() {
    const free = OS.freemem(); 
    return {
        max: memory(maxMemory),
        free: memory(free),
        used: memory(maxMemory - free),  
        usedByProcess: memory(process.memoryUsage().rss)  
    }
}

function memory(bytes = 0) {
    const gigaBytes = bytes / 1024 ** 3;  
    
    if(gigaBytes > 1) { 
        return `${gigaBytes.toFixed(1)} GB`;  
    }

    const megaBytes = bytes / 1024 ** 2;  
    
    if(megaBytes < 10) return `${megaBytes.toFixed(2)} MB`; 
     
        
    if(megaBytes < 100) return `${megaBytes.toFixed(1)} MB`; 
   
        
     return `${Math.floor(megaBytes)} MB`;  
}

let memoria = getMemoryUsage();

console.log(memoria)
 
 
let embed = new Discord.MessageEmbed()
  .addField('Memoria maxima', memoria.max)
  .addField('Memoria libre', memoria.free)
  .addField('Memoria usada por el bot', memoria.usedByProcess)

message.reply({ embeds: [embed] })
  }
}