const keepAlive = require('./server');
const Monitor = require('ping-monitor');
const mongoose = require('mongoose')
require('dotenv').config()
 
keepAlive();
const monitor = new Monitor({
    website: 'https://SBorStar-Bot-2.francisco56155.repl.co',
    title: 'SB|BotBeta',
    interval: 5  
});
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error)); 

const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();

// Initializing the project
require("./handler")(client);
console.log(process.env.TOKEN_ARCADIA_BOT)

client.login(process.env.TOKEN_ARCADIA_BOT);
    mongoose.connect(`${process.env.URLDB}`,{
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useFindAndModify : true,
    }).then(console.log('conectado a la base de datos externa')).catch(e => {
        console.log(`Error al conectar a la base de datos ${e}`)
    })


const aoijs = require('./dbd.js')
var cp = require('child_process');
cp.execFile('./audit.sh', function(err, stdout, stderr) {
  if(err) return console.error(err)
    console.debug(stdout)
    console.debug(stderr)
});