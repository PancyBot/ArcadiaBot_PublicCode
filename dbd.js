
const dbd = require("aoi.js");
console.log(process.env.TOKEN_ARCADIA_BOT)
const bot = new dbd.Bot({
  token: process.env.TOKEN_ARCADIA_BOT,
  prefix: "AR!",
  intents: "all"
});

bot.onMessage();

bot.variables({
    warn: "0",
	kicks: "0",
	tickets: '0',
	ticket: "0",
	ticketsystem: "yes",
	ticketcategory: "",
    staffs: "",
  }) 

 
bot.command({
  name: "md",
  code: `$dm[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]] $replaceText[$replaceText[$isNumber[$message[1]];true;$replaceText[$replaceText[$message;$findNumbers[$message];;1];<@$mentioned[1]>;;1];1];false;$noMentionMessage;1]

$channelSendMessage[$channelID;{newEmbed:{author:¡Mensaje enviado con éxito!:$userAvatar[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]]}{description:Se envió el mensaje:
\`\`\`
$replaceText[$replaceText[$isNumber[$message[1]];true;$replaceText[$replaceText[$message;$findNumbers[$message];;1];<@$mentioned[1]>;;1];1];false;$noMentionMessage;1]
\`\`\`
al DM de el/la usuari@ <@$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]> correctamente.}{field:**User ID**:$findUser[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]]:no}{field:**User Tag**:$userTag[$findUser[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]]]:no}{footer:$serverName[$guildID]:$serverIcon}{color:GREEN}}]

$onlyIf[$message!=;{newEmbed:{title:Mensaje no introducido}{description:Por favor introduce un mensaje para enviar a el/la usuari@.}{color:ORANGE}}]

$onlyIf[$UserExists[$findUser[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentioned[1];1]]]==true;{newEmbed:{title:Usuari@ Inexistente}{description:El/La Usuari@ introducid@ no fue encontrada en las IDs de usuari@s existentes en Discord.}{color:RED}}]

$onlyIf[$isUserDMEnabled[$replaceText[$replaceText[$isNumber[$message[1]];true;$message[1];1];false;$mentione d[1];1]]==true;{newEmbed:{title:DM Cerrado}{description:El usuario introducido tiene su DM cerrado por lo que no se pudo enviar el mensaje.}{color:RED}}]

$onlyForIDs[796650479673147422;711329342193664012;727021390686978061;{newEmbed:{itle:Notienes permisos para ejecutar este comando}{description:No intentes usar este comando si no eres un Staff autorizado o s e te podría integrar a la BlackList del Bot.}{color:RED}}]`
})

bot.command({
  name: "serverage",
  code: `
  $deletecommand
  el server tiene 1 año 2 meses aproximadamente
  `
}) 
//dm    
bot.command({
 name: 'kick',
 code: `
 $onlyForIDs[711329342193664012;:x:No tienes permisos]
 $kick[$mentioned[1]]
 $deletecommand
 $dm[$mentioned[1];$description[1;
	 Fuiste expulsado de Arcadia Roleplay
 ]]
 $title[1;Un nuevo usuario fue expulsado]
 $description[1;
Usuario expulsado: <@$mentioned[1]>
Moderador responsable: <@$authorID> 
Razon: $message
 ] 
 `
}) 
bot.command({
  name: "help",
  code: `
  	$globalCooldown[30s;Necesitas esperar %time% para volver a ejecutar el comando]
  $title[1;:toolbox:┃**COMANDOS DE EL BOT**]
  $description[1;
  <a:ok:871179577324605511>  • **Diversión:**⤵

  <a:flecha:853038175630786581> AR!say ➔ dice lo que quieras
  <a:flecha:853038175630786581> AR!memes ➔ suelta un meme random 
  <a:flecha:853038175630786581> AR!avatar ➔ Para ver el avatar de un usuario
  <a:flecha:853038175630786581> AR!8ball ➔ Pregunta cualquier cosa y te respondo
  <a:flecha:853038175630786581> AR!ship ➔ Menciona a dos personas y mira los resultados de la máquina de amor
  <a:flecha:853038175630786581> AR!horoscopo ➔ Mira tu horóscopo 

  <a:ok:871179577324605511>  • **Moderación:**⤵

  <a:flecha:853038175630786581> AR!warn ➔  Para advetir
  <a:flecha:853038175630786581> AR!warnings ➔ Para ver el numero de advertencias que tiene un usuario
  <a:flecha:853038175630786581> AR!remove-warn ➔ Para quitar advertencias 
  <a:flecha:853038175630786581> AR!tempmute ➔ Para silenciar temporalmente a un usuario
  <a:flecha:853038175630786581> AR!mute ➔ Para silenciar a un usuario
  <a:flecha:853038175630786581> AR!unmute ➔ Para quitar el silencio a un usuario

 <a:ok:871179577324605511>  • **Developer:**

  <a:flecha:853038175630786581> AR!blacklist ➔ Para agregar a un usuario a la blacklist
  <a:flecha:853038175630786581> AR!rblacklist ➔ Para eliminar a un usuario de la blacklist
  <a:flecha:853038175630786581> AR!rstaff ➔  Para eliminar a un usuario de la lista de staffs
  <a:flecha:853038175630786581> AR!newstaff ➔ Para agregar un usuario a la lista de staffs
  <a:flecha:853038175630786581> AR!eval ➔ Para probar codigos en JavaScript

  <a:ok:871179577324605511>  • **Útilidad:**⤵

  <a:flecha:853038175630786581> AR!sugerencia (tema) (Sugerencia) ➔ Comando para dar una sugerencia
  <a:flecha:853038175630786581> AR!ping ➔ Mira el tiempo de respuesta del bot
  <a:flecha:853038175630786581> AR!ram ➔ Mira la ram de el bot
  <a:flecha:853038175630786581> AR!bot-status ➔ Mira la información de el bot
  
  <a:ok:871179577324605511>  • **Ayuda:**⤵

  <a:flecha:853038175630786581> AR!b-rangos ➔ Mira la información de los rangos de paga
  <a:flecha:853038175630786581> AR!b-rangos ➔ Mira los precios de los unban 
  <a:flecha:853038175630786581> AR!ip ➔ La ip de el servidor
  <a:flecha:853038175630786581> AR!version ➔ Para ver la versión de el servidor
  <a:flecha:853038175630786581> AR!pf ➔ preguntas frecuentes  
  ]
  $image[1;https://media.discordapp.net/attachments/814949340962881606/838630291957612584/IMG_20210502_225424-1-1.jpg]
  $color[1;#00BDFF]
  `
});
bot.command({
  name: "ip",
  code: `IP: arcadiaroleplay.hardmc.xyz
PUERTO: 19194
  `
})
bot.command({
  name: "set-staffs",
  aliases: "ss",
  code: `$author[1;$userTag;$authorAvatar]
  $description[1;El staff se ha establecido como:
  $filterMessage[$message;\`\`\`;\`\`\`]]
  $footer[1;$serverName[$guildID];$serverIcon]
  $addTimestamp[1]	
  $color[1;e8c02a]

  $setServerVar[staffs;$filterMessage[$message;\`\`\`;\`\`\`]]
  $onlyForIDs[796650479673147422;711329342193664012;{newEmbed:{title:No Autorizado}{description:No tienes autorización para utilizar este comando. Si lo itentas usar otra vez podrías ser int egrado a la BlackList del Bot.}{color:RED}}]
  $onlyIf[$message!=;{newEmbed:{title:Staff  no introducido}{description:No se ha introducido un texto con el Staff. Introduce uno. Usa \`AR!staff\` para ver el código del actual staff}{color:RED}}]`
})
bot.command({
  name: "staff",  
  code: `$author[1;$userTag;$authorAvatar]
  $description[1;\`\`\`
  $getServerVar[staffs]
  \`\`\`]
  $footer[1;$serverName[$guildID];$serverIcon]
  $color[1;e8c02a]
  $onlyForIDs[796650479673147422;711329342193664012;{newEmbed:{title:No Autorizado}{description:No tienes autorización para utilizar este comando. Si lo itentas usar otra vez podrías ser int egrado a la BlackList del Bot.}{color:RED}}]
  `
})
bot.command({
  name: 'pf',
  code: `
    $globalCooldown[30s;Necesitas esperar %time% para volver a ejecutar el comando] 
  $title[1;**Preguntas Frecuentes**]
    $description[1;**¿Quién es el STAFF/Personal?**
  El STAFF/Personal del servidor es:

  $getServerVar[staffs]

  **¿Cómo puedo ser STAFF?**
  Puedes ser parte de este estando 3 meses ayudando gente y que estos te recomienden o comprando el rango.

  **¿Qué rangos de paga hay?**
  Puedes ver los rangos de paga en #【:moneybag:】precios-de-rangos o poniendo AR!b-rangos en #【:wrench:】ᴄomandos.

  **¿De qué trata el servid or?**
  El servidor está dedicado al RolePlay, esto implica simular una vida.

  **¿Cuál es la IP y el Puerto del servdor?**
  La IP es: arcadiaroleplay.hardmc.xyz y el Puerto es 19194. Si se te olvida, el puerto está en #【:label:】ip-y-puerto, o puedes ir a #【:wrench:】ᴄomandos y poner AR!ip y se te mostrará el ip y el puerto.

  **Antes de empezar**
  **Procura leer los siguientes canales:**
  ➜ <#776846470572671056>
  ➜ <#815429769700442132>
  ➜ <#846444496496361502>
  ➜ <#839966605974306837>
  ➜ <#852956903251247154>
  ➜ <#816861014586163212>
  ➜ <#816048007320698901>
  Para no ser sancionado ni baneado del servidor. Y también para que aprendas a rolear, por si no sabes.
  $color[1;#00BDFF]
  ]
    `
})
bot.command({
  name: "bot-status2",
  code: `
  $title[1;**ESTADO DE EL BOT**]
  $description[1;ESTADO: **NORMAL**
  RAM: \`$ram mb\` / 500mb
  CPU: \`$cpu %\` / 100%
  PING: \`$ping ms\`
  ]
  `
})
bot.command({
  name: "b-rangos",
  code: `
  $title[1;beneficios rangos]
  $description[1;////RANGO STAFF\\\\
PRECIO: 150$ a ||5000$||
CARACTERÍSTICAS: ¡¡Ser Staff!!

////RANGO JESUCRISTO\\\\
PRECIO: 50$
CARACTERÍSTICAS: Creativo Infinito bajo supervisión, fly, 200k la hora en #【💸】economia, parcela en el barrio VIP, 500 millones de Arcadolares, 20 autos full tuneados a tu gusto, un rango personalizado canjeable de 1$ para que se lo regales a quien quieras y la posibilidad de que un Staff te haga tu casa o la construcción que tu pidas. También 28 NPC a tu gusto o 20 estatuas de tu skin bañadas en Oro!

////RANGO ALCALDE\\\\
PRECIO: 30$
CARACTERÍSTICAS: Creativo Infinito bajo supervisión, fly, 50k la hora en #【💸】economia, parcela en el barrio VIP, 400 millones de Arcadolares, 15 autos full tuneados a tu gusto, un rango personalizado canjeable de 1$ para que se lo regales a quien quieras, poder crear tu propia ciudad ya sea pública o solo para tus amigos y la posibilidad de que un Staff te haga tu casa o la construcción que tu pidas. También 20 NPC a tu gusto (guardaespaldas en especial) o 8 estatuas de tu skin bañadas en Oro!

////RANGO ULTRA VIP\\\\
PRECIO: 12$ 
CARACTERÍSTICAS: Creativo 1 hora bajo supervisión cada mes, fly, 30k la hora en #【💸】economia, dos parcelas en el barrio VIP, 300 millones de Arcadolares, 13 autos full tuneados a tu gusto, un rango personalizado canjeable de 1$ para que se lo regales a quien quieras y la posibilidad de que un Staff te haga tu casa o la construcción que tu pidas.
También 8 NPC a tu gusto o cuatro estatuas de tu skin bañadas en Oro!
]
 
  
`
});
bot.command({
  name: 'b-rangos',
  code: `
  $description[1;////RANGO VIP\\\\
PRECIO: 6$ 
CARACTERÍSTICAS: Creativo 30 minutos bajo supervisión cada mes, fly, 20k la hora en #【💸】economia, una parcela en el barrio VIP, 200 millones de Arcadolares, 8 autos a tu gusto, un rango personalizado canjeable de 1$ para que se lo regales a quien quieras y la posibilidad de que un Staff te haga tu casa o la construcción que tu pidas. También 4 NPC a tu gusto o dos estatuas de tu skin bañadas en Oro!

////RANGO MINI VIP\\\\
PRECIO: 3$
CARACTERÍSTICAS: Creativo 15 minutos bajo supervisión cada mes, fly, 10k la hora en #【💸】economia, una parcela en el barrio VIP, 50 millones de Arcadolares, 2 autos a tu gusto y la posibilidad de que un Staff te haga tu casa o la construcción que tu pidas. También 3 NPC a tu gusto o una estatua de tu skin bañada en Oro!

////RANGO MICRO VIP\\\\
PRECIO: 1$ 
CARACTERÍSTICAS: Creativo 40 minutos bajo supervisión con 1 de uso, fly, 5k la hora en #【💸】economia, una parcela en el barrio VIP, 20 millones de Arcadolares, 1 autos a tu gusto, y la posibilidad de que un Staff te haga tu casa. También 2 NPC a tu gusto o una estatua de tu skin bañada en Oro!] 
  `
})
bot.command({
  name: "p-unban",
  code: `
  $title[**PRECIOS UNBAN**]
  $description[Primer debaneo: $5
Segundo desbaneo: $10
Tercer desbaneo: $15]`
});
bot.command({
	name: "leave",
	code: `
	$onlyIDs[ownerID;Solo el dueño de el servidor puede hacer esto]
	$leave
	`
})
bot.command({
  name: "sugesst",
  channel: "786838738788548610",
  code: `$message
  `

})
bot.command({
 name: 'ship',
 code: `$title[1;Ship :two_hearts: ¿Se aman? :point_right::point_left:]
 $description[1;Resultados entre <@$mentioned[1]> y <@$mentioned[2]>

Porcentaje de amor entre ambos: **$random[0;100]%**
<@$mentioned[1]> ama a <@$mentioned[2]> un: **$random[0;1000]%**
<@$mentioned[2]> ama a <@$mentioned[1]> un: **$random[20;1000]%**
Líder de la relación: $randomText[<@$mentioned[1]>;<@$mentioned[2]>]
Tóxic@ de la relación: $randomText[<@$mentioned[2]>;<@$mentioned[1]>]
Tipo de relación: **$randomText[Duradera;Corta;Duradera;Corta;Corta;], $randomText[Linda;Amorosa;Tóxica;Tierna;Peleonera;Normal], $randomText[Posiblemente se lleven bien;Se odian mútuamente;Se aman demasiado;Durarán unos meses;Un amor para toda la vida].**
 ]
 $footer[1;$randomText[Qué bonita pareja;Aww;Qué tiernos;Ojalá tuviese una pareja así]]
 $image[1;https://api.popcatdev.repl.co/ship?user1=$userAvatar[$mentioned[1]]&user2=$userAvatar[$mentioned[2]]]
 $color[1;#C42D2D]
 $argsCheck[>2;**Menciona a 2 personas**]
 `
 })

 bot.command({
 name: 'horoscopo',
 code: `$thumbnail[1;$authorAvatar]
 $title[1;$username Este es tu horóscopo :crystal_ball:]
 $description[1;:two_hearts: ┃ **__Amor:__** $random[0;200]%
 :stethoscope: ┃ **__Salud:__** $random[0;520]%
 :slot_machine: ┃ **__Suerte:__** $random[0;100]%
 :credit_card: ┃ **__Dinero:__** $random[0;400]%

 :eye: ✦ Veo que en **Tu futuro:**

 :mortar_board: ★ **Estudiarás:** $randomText[Medicina;Informática;Leyes;Nada;Astronomía;Diseño Gráfico]
 :crossed_swords: ★ **Lucharás:** $randomText[Contra una grave enfermedad;Contra una amistad;Contra una terrible decisión;Contra una crisis económica;Contra la soledad;Con las deudas]
 :gem: ★ **Tendrás:** $randomText[Mucho dinero;Muy poco dinero;Una linda novia;Una gran mansión;Una casa normal;Una banqueta;Poca comida;Amigos fieles]
 :map: ★ **Visitarás:** $randomText[Nueva York;China;Japón;Rusia;África;Nada;Puerto rico;A tu mejor amigo;A tu crush;A tu novia;India;Toda América;Todo Latam;Toda Asia;Toda Europa]
 :drop_of_blood: ★ **Sufrirás:** $randomText[Una crisis existencial;Una ruptura;Una grave enfermedad;Un desamor;Un amor a primera vista;Un crush;Una depresión;Una herida normal]
 :skull: ★ **Morirás:** $randomText[Pronto...;En un accidente de tráfico;Secuestrado;En dos décadas;Hoy;Mañana;Ayer;Por intoxicación;Ridículamente;Mortalmente;Por vejéz;Por un infarto;Por un demonio;Por caída;No morirás]]
 $footer[☪ $randomText[¿Será posible?;¿Se hará realidad?;¿Es lo que esperabas?;¿En verdad existe el destino?;¿Satisfech@?;¿Cómo te encuentras bien después de saber esto?;¿Es lo que soñaste?;¡Suerte con tu vida!;¡Feliz vida!;¡Que tengas una excelente vida!;Ojalá tengas un lindo día;Ojalá tengas una buena vida.;¡Cuidate!]☀]
 $color[1;#FF5500]
 `
 })

//en el comando de abajo en lugar de STAFF pones que mencione a el rol de staff, acá te dejo para que lo copies y pegues y no trabajes tanto :timido:
//<@&815419572177469450>
//no lo puse yo por cualquier cosa que se haga test no pinguee innecesaria y masviamente a los STAFFS

bot.command({
 name: 'ticket',
 code: `<@$authorID> Bienvenido! espera a que un STAFF te atienda.
$nomention
$c[ HABILITA EL MODO unstable]
$addButton[no;closeticket;Cerrar;danger;no;:lock:]
$addButton[no;claimticket;Atender;primary;no;:wave:]
 
$c[Configuración de permisos, no modificar]
$modifyChannelPerms[$findChannel[ticket-00$sum[$getServerVar[tickets];1]];-readmessages;$guildID]
 
$modifyChannelPerms[$findChannel[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;$authorID]

$modifyChannelPerms[$findChannel[ticket-00$sum[$getServerVar[tickets];1]];+readmessages;815419572177469450]

$modifyChannel[$findChannel[ticket-00$sum[$getServerVar[tickets];1]]; ;Ticket abierto por $username#$discriminator[$authorID]; no;!unchanged;$getServerVar[ticketcategory]]
 
$c[Incrustar en el ticket creado, puede modificar cualquier cosa en él]
$author[Ticket #00$sum[$getServerVar[tickets];1]]
$description[Saludos <@$authorID>, este es tu ticket!
Cuéntenos su problema, nuestro personal le responderá lo antes posible.
 
Si desea cerrar el ticket presione 'Cerrar' o escriba 'AR!cerrar'.
 
Tenga paciencia hasta que un miembro de nuestro personal revise y atienda su problema, por favor.]
 
$footer[$username[777714535624605726] Tickets]
$addTimestamp
$color[$random[111111;999999]]
$c[useChannel, don't modify]
$useChannel[$findChannel[ticket-00$sum[$getServerVar[tickets];1]]]
 
$c[Mensaje cuando un usuario abre un ticket, puede modificar el mensaje como desee, sin embargo, no admite incrustaciones.]
$channelSendMessage[$channelID; <@$authorID> se ha creado correctamente su <#$findChannel[ticket-00$sum[$getServerVar[tickets];1]]>! ]
 
$c[Variable settings, don't modify]
$setUserVar[ticket;$findChannel[ticket-00$sum[$getServerVar[tickets];1]];$authorID]
$setServerVar[tickets;$sum[$getServerVar[tickets];1]]
 
$c[Configuración de los limitadores, no modificar]
$onlyBotPerms[managechannels;]
$onlyIf[$channelExists[$findChannel[$getUserVar[ticket;$authorID]]]==false;]
$enabled[$getServerVar[ticketsystem];]`
})

bot.command({
 name: 'cerrar',
 code: `$nomention
$c[ HABILITA EL MODO unstable ]
$deleteChannels[$channelID]
$onlyBotPerms[managechannels;Oye, dame permisos para administrar canales, de lo contrario, no puedo crear canales, por lo que el sistema de tickets no funcionará.]
$enabled[$getServerVar[ticketsystem];El sistema de tickets está deshabilitado, ¡Escriba AR!enabletickets para habilitar el sistema!]
$onlyIf[$checkContains[$channelName[$channelID];ticket-00]==true;Lo sentimos, pero esto no es un ticket, solo puedes usar este comando en tickets.]`
})

bot.command({
 name: '$awaitedCommand[ticketclose;]',
 code: `$nomention
$c[ habilita el modo unstable ]
 
$if[$checkContains[$message;close]==true]
$deleteChannels[$channelID]
$else
$endif
 
$if[$checkContains[$message;cancel]==true]
 
$author[Cancelado!]
$color[$random[111111;999999]]
$description[Cancelada con éxito esta acción, el ticket no se cerrará.]
$footer[$username[777714535624605726] Sistema de Tickets]
$addTimestamp
 
$endif
 
$onlyIf[$checkContains[$channelName[$channelID];ticket-00]==true;]`
})

//El comando de arriba no se si sirva pero se lo puse a mi bot y pues no me ha dado problemas así que se lo puse :vacaxd:

bot.command({
 name: '$onInteraction[claimticket]',
 code: `$nomention
$c[ habilita el modo unstable ]
 
$c[Puede modificar el mensaje a continuación como desee, pero NO PUEDE insertarlo]
$channelSendMessage[$channelID;:raised_hand: |  <@$authorID> Atenderá este ticket!]
 
$c[Quite el modifiedChannel a continuación si no desea cambiar el tema del canal cuando alguien reclama un ticket]
$modifyChannel[$channelID; ;:raised_hand: | Ticket atendido por $username[$authorID]#$discriminator[$authorID]! | $channelTopic; no;!unchanged;$getServerVar[ticketcategory]]
 
$c[Quite el único Si a continuación, si desea que el personal pueda reclamar el boleto aunque ya lo hayan reclamado]
$onlyIf[$checkContains[$channelTopic;$username[$authorID]#$discriminator[$authorID]!]==false;<@$authorID> ¡Parece que ya reclamó este Ticket!]
 
$c[Quite el único Si a continuación, si desea que cualquiera pueda reclamar el boleto, no solo las personas con los permisos que se indican a continuación]
$onlyIf[$or[$checkUserPerms[$authorID;managemessages]==true;$checkUserPerms[$authorID;manageserver]==true;$checkUserPerms[$authorID;manageroles]==true;$checkUserPerms[$authorID;managechannels]==true]==true;<@$authorID> Solo el personal puede reclamar Tickets!]`
})

bot.command({
 name: '$onInteraction[closeticket]',
 code: `$nomention
$c[el modo unstable no es necesario en este]
$deleteChannels[$channelID]`
})

bot.command({
 name: 'setcategory',
 code: `$nomention
$c[ habilitar el modo unstable ]
 
$color[$random[111111;999999]]
$footer[$username[777714535624605726] Tickets]
$addTimestamp
 
$if[$message[1]==off]
$setServerVar[ticketcategory;]
$author[Categoría de entrada desactivada]
$description[Oye, desactivó con éxito la categoría de entradas, ahora las entradas se crearán fuera de cualquier categoría, para volver a activarla solo haz AR!setcategory <ID de categoría>]
$endif
 
$if[$message[1]!=off]
 
$setServerVar[ticketcategory;$message[1]]
$author[Categoría de entrada configurada]
$description[Estableció correctamente la categoría <#$message[1]> como categoría de entrada! los siguientes tickets creados se moverán allí!]
$onlyIf[$findChannel[$channelName[$message[1]]]!=;Ingrese un ID de categoría de este servidor únicamente!]
$onlyIf[$channelExists[$message[1]]==true;Proporcione un ID de categoría válido]
$onlyIf[$isNumber[$message[1]]==true;Proporcione un ID de categoría válido, solo se permiten números, ya que es una categoría]
 
$endif
 
$enabled[$getServerVar[ticketsystem];El sistema de tickets está desactivado, haga AR!enabletickets para activar el sistema!]
$onlyIf[$message[1]!=;Escribe un ID de categoría para establecerlo como categoría de entrada o escribe "desactivado" para desactivar la categoría de entrada.]
$onlyPerms[managechannels;Necesita administrar los permisos de los canales para hacer esto!]
$varExistError[ticketcategory;¿Podría simplemente ... agregar la variable "ticketcategory" sin valor? también verifique que NO tenga espacios en el nombre]`
})

bot.command({
 name: 'ticket',
 code: `$nomention
$c[ habilita el modo unstable ]
 
$if[$getServerVar[ticketcategory]!=]
$createChannel[ticket-00$sum[$getServerVar[tickets];1];text]
$else
$createChannel[ticket-00$sum[$getServerVar[tickets];1];text;$getServerVar[ticketcategory]]
$endif
 
$onlyBotPerms[managechannels;Oye, dame permisos para administrar canales; de lo contrario, no puedo crear canales, por lo que el sistema de tickets no funcionará.]
$onlyIf[$channelExists[$findChannel[$getUserVar[ticket;Ya tienes un ticket abierto, ve a $authorID]]]==false;<#$getUserVar[ticket;$authorID]>!]
$enabled[$getServerVar[ticketsystem];El sistema de tickets está desactivado, por favor haga RH-enabletickets para activar el sistema.]
 
$varExistError[ticketsystem;Cree la variable "sistema de tickets" con el valor "no" si lo desea deshabilitar de forma predeterminada, o "sí" si desea que el sistema de tickets esté habilitado de forma predeterminada.]
$varExistError[tickets;¿Qué esperabas? agregue la variable "tickets" con valor "0" y no sea perezoso]
$varExistError[ticketcategory;Oye, para ser honesto, sería bueno si agregas la variable "ticketcategory", sin valor por cierto]`
})

bot.command({
 name: 'comandos',
 code: `$title[Saludos! **Estos son algunos comandos que te serán útiles al momento de jugar en nuestro servidor!**]
 $description[<a:flechita:871195703597228043> **__Home's__**

 **<a:flecha_der:882309067920535582> /sethome {nombre}**
 • Este comando funciona para crear un 'home', que es algo así como un tp hacia una localización específica (el nombre va sin las "{}" y solo puede tener caracteres de la A a la Z, mayúsculas, minúsculas y números) puedes tener tantos homes como gustes. 
 **<a:flecha_der:882309067920535582> /home {nombre}**
 • Este comando sirve para ir a la localización que desees, solo debes poner un nombre de un 'home' que hayas guardado con anterioridad (el nombre va sin las "{}" y debe ser exactamente como lo guardaste, con lo mismo números, letras, mayúsculas y minúsculas).
 **<a:flecha_der:882309067920535582> /home**
 • Este comando sirve para ver tus 'homes' que hayas guardado con anterioridad.
 
 <a:flechita:871195703597228043> **__Warp's__**

 **<a:flecha_der:882309067920535582> /warp**
 • Este comando sirve para ver los 'warps' existentes.
 **<a:flecha_der:882309067920535582> /warp {nombre}**
 • Este comando sirve para ir a un 'warp', que son lo mismo que los 'homes', pero estos ya vienen predeterminados para todos, (el nombre debe ir exactamente como se guardó, con las mismas letras, números, mayúsculas y minúsculas, y sin las "{}").
 
 
 <a:flechita:871195703597228043> **__Tp's__**

 **<a:flecha_der:882309067920535582> /tpa {nombre}**
 Este comando funciona como un tp hacia un jugador, solo debes poner el gamertag del jugador después de "/tpa", el nombre no debe ser necesariamente exacto (y el nombre va sin las "{}").
 **<a:flecha_der:882309067920535582> /tpahere {nombre}**
 • Este comando cumple la función de ser un tp pero en lugar de teletransportarte hacia el jugador, el jugador que hayas puesto se tele transportará hacia tí (el nombre no debe ser necesariamente exacto y el nombre va sin las "{}").
 **<a:flecha_der:882309067920535582> /tpaccept**
 • Este comando cumple la función anti raid o anti tp's masivos sin permiso, es decir, para que solo se teletransporten los jugadores que aceptes, esto lo debe poner el jugador al que le mandaste 'tpa' o 'tpahere', o lo debes poner tú si es que te envían alguno de estos dos antes mencionados, lo sabrás ya que te llega un texto naranja como este (si solo pones "/tpaccept" se aceptará el 'tpa' o 'tpahere' al último usuario que te envió alguno de estos dos mencionados, para aceptar uno en específico debes poner "/tpaccept {nombre} (sin las "{}") el nombre no debe ser necesariamente exacto"). 

 <a:flechita:871195703597228043> **__Economía__**

 **<a:flecha_der:882309067920535582> /pay {nombre} {cantidad}**
 • Este comando cumple la función de pagarle a un jugador con el dinero ficticio del juego, el nombre no debe de ser exacto necesariamente y el comando va sin las "{}", y si pones una cantidad que no posees el comando te saldrá en error. Ejemplo: /pay Hector 10000 (el número va sin comas o puntos).
 **<a:flecha_der:882309067920535582> /seemoney {nombre}**
 • Este comando funciona para ver el dinero que posee un usuario, el nombre no debe de ser exacto necesariamente.
 **<a:flecha_der:882309067920535582> /topcash**
 • Este comando funciona para ver el top de personas con más dinero del servidor.

 **Información:**]
 $footer[Todos los comandos van sin las "{}". Es ilegal usar los Home's, Tp's y warp's para hacer roloes de asalto o secuestro, lo mismo con el /seemoney y el /topmoney.]
 $color[0730e9]
 `
})