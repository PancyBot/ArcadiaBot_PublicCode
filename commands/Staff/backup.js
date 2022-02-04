const Discord = require('discord.js')
const backup = require('discord-backup')
module.exports = {
  name: 'backup',
  description: 'crear, cargar o informacion de la backup',

  async run (client, message, args) {
    const errorembed1 = new Discord.MessageEmbed()
    .setTitle('ERROR')
    .setDescription(`Argumento faltante \nUso correcto de el comando: \`AR!backup <create | load | infos>\``)
    
    
    if(!args[0]) return message.reply({ content: 'escribe algo' }).then(m => setTimeout(() => m.delete(), 3000))

    let Comandos = ['create', 'load', 'infos']
      if(!Comandos.includes(args[0].toLowerCase())) return message.reply({ content: 'error' }) 

      if(args[0] == 'create') {
        
        if(!message.member.permissions.has("ADMINISTRATOR")){
            return message.reply({ content: ":x: | You must be an administrator of this server to request a backup!"});
        }
        
        backup.create(message.guild, {
            jsonBeautify: true
        }).then((backupData) => {
          
            message.author.send({ content: "The backup has been created! To load it, type this command on the server of your choice: A!load "+backupData.id+"`!" });
            message.reply({ content: ":white_check_mark: Backup successfully created. The backup ID was sent in dm!" });
        });
      } else if(args[0] == 'load') {
        try {
        if(!message.member.permissions.has("ADMINISTRATOR")){
            return message.reply({ content: ":x: | You must be an administrator of this server to load a backup!" });
        }
        let backupID = args[1];
        if(!backupID){
            return message.reply({ content: ":x: | You must specify a valid backup ID!" });
        }
        
        backup.fetch(backupID).then(async () => {
          
                message.reply({ content: ":white_check_mark: | Start loading the backup!" });
                
                backup.load(backupID, message.guild).then(() => {
                  
                    backup.remove(backupID);
                }).catch((err) => {
                  
                    return message.author.send({ content: ":x: | Sorry, an error occurred... Please check that I have administrator permissions!" });
                });
        }).catch((err) => {
            console.log(err);
            
            return message.reply({ content: ":x: | No backup found for `"+backupID+"`!" });
        });
        } catch (err) {
            console.error(err)
        }
      } else if(args[0] == 'infos') {

        let backupID = args[1];
        if(!backupID){
            return message.reply({ content: ":x: | You must specify a valid backup ID!" });
        }
        
        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
                .setAuthor("Backup Informations")
                
                .addField("Backup ID", backupInfos.id, false)
                
                .addField("Server ID", backupInfos.data.guildID, false)
                
                .addField("Size", `${backupInfos.size} kb`, false)
                
                .addField("Created at", formatedDate, false)
                .setColor("#FF0000");
            message.reply(embed);
        }).catch((err) => {
          
            return message.reply({ content: ":x: | No backup found for `"+backupID+"`!" });
        });

      }

  }
}