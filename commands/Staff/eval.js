const Discord = require("discord.js");
const Hastebin = require("hastebin-save");

module.exports = {
  name: `eval`,
  description: `probar comandos`,

  async run (client, message, args) {
    if (message.author.id == "711329342193664012"||(message.author.id == "796650479673147422")) {
       async function enviar(mensaje) {
        return await message.reply(mensaje)
        }

        async function exec(codigo) {
        return await require("child_process").execSync(codigo)
        }
                function mayuscula(string) {
            string = string.replace(/[^a-z]/gi, '')
            return string[0].toUpperCase()+string.slice(1)
        }
         let tiempo1 = Date.now()
          const edit = new Discord.MessageEmbed()
        .setDescription(":stopwatch: Evaluando...")
        .setColor("#7289DA")
        message.reply({embeds: [edit]}).then(async msg => { 
            try {
              let code = args.join(" ");
              let evalued = await eval(code);
              let tipo = typeof evalued||"Tipo no encontrado."
              if (typeof evalued !== 'string') evalued = require('util').inspect(evalued, { depth: 0, maxStringLength: 2000});
              let txt = "" + evalued;

               if (txt.length > 1500) {

                Hastebin.upload(`- - - - Eval - - - -\n\n${txt.replace(client.token, "Wow, un token")}`, link => {
            
                const embed = new Discord.MessageEmbed()
                .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Salida", `\`El codigo es muy largo, link:\` https://hastebin.com/${link}.js`)
                .addField(":file_folder: Tipo", `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
                .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                .setColor("#7289DA")
                msg.edit({ embeds: [embed]});
                })
        
              } else { 
     
    
                const embed = new Discord.MessageEmbed()
                .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Salida", `\`\`\`js\n${txt.replace(client.token, "No quieres saber eso.")}\n\`\`\``)
                .addField(":file_folder: Tipo", `\`\`\`js\n${mayuscula(tipo)}\n\`\`\``, true)
                .addField(":stopwatch: Tiempo", `\`\`\`fix\n${Date.now() - tiempo1}ms\n\`\`\``, true)
                .setColor("#7289DA")
                msg.edit({ embeds: [embed]});
              }
            } catch (err) {          
              let code = args.join(" ")
              const embed = new Discord.MessageEmbed()
              .setAuthor("Error en el eval", client.user.displayAvatarURL({dynamic : true}))
              .addField(":inbox_tray: Entrada", `\`\`\`js\n${code}\n\`\`\``)
              .addField(":outbox_tray: Salida", `\`\`\`js\n${err}\n\`\`\``)
              .addField(":file_folder: Tipo", `\`\`\`js\nError\n\`\`\``)
              .setColor("RED")
              msg.edit({embeds: [embed]});
          }
        })
        } else {
     
    
        const nopuedes = new Discord.MessageEmbed()
        .setDescription(":x: No puedes ejecutar este comando.")
        .setColor("RED")
        message.reply({ embeds: [nopuedes]})
        
        }
    }
  } 