
const client = require('../index')
const fetch = require('node-fetch');
const link = "https://ArcadiaStats.francisco56155.repl.co/stats"

client.on('ready', () => {
     console.log(`${client.user.username} ✅`) 

	 const array = [ 
  {
    name: `AR!help | v3.0.2`, 
    type: `WATCHING` 
  },
  {
    name: `${client.users.cache.size.toLocaleString()} Usuarios`,
    type: `WATCHING`
  }
]

	const estados =	['AR!help | v3.0.2 Oficial', `Usuarios: ${client.users.cache.size.toLocaleString()} Servidores: ${client.guilds.cache.size.toLocaleString()}`]
	
    setInterval(() => {
        function presence() {
			const random = estados[Math.floor(Math.random() * estados.length)]
            client.user.setPresence({
			  activities: [{ name: random }], status: 'idle',
            });
        }

        
        presence();
    }, 10000);
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
try {
				let memoria = 0;
				setInterval(() => {
					memoria = getMemoryUsage()
				}, 100)
function cpuAverage() {

  //Initialise sum of idle and time of cores and fetch CPU info
  var totalIdle = 0, totalTick = 0;
  var cpus = OS.cpus();

  //Loop through CPU cores
  for(var i = 0, len = cpus.length; i < len; i++) {

    //Select CPU core
    var cpu = cpus[i];

    //Total up the time in the cores tick
    for(type in cpu.times) {
      totalTick += cpu.times[type];
   }     

    //Total up the idle time of the core
    totalIdle += cpu.times.idle;
  }

  //Return the average Idle and Tick times
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}

//Grab first CPU Measure
var startMeasure = cpuAverage();
let percentageCPU = 0
setInterval(function() { 

  var endMeasure = cpuAverage(); 

  var idleDifference = endMeasure.idle - startMeasure.idle;
  var totalDifference = endMeasure.total - startMeasure.total;

  percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);


}, 1000);

		setInterval(async() => {
			const body = {
				"data": {
					"name": 'ArcadiaTickets',
					"ram": {
						"usage": memoria.usedByProcess,
						"total": '500 MB',
					},
					"cpu": {
						"usage": percentageCPU
					}
				}
			}
 		    const options = {
  		    method: 'POST',
        	headers: {
        	    'keyapi': process.env.APIARCADIAKEY,
				'Content-Type': 'application/json',
        	},
        	body: JSON.stringify({
				data: {
					name: 'ArcadiaBot',
					ram: {
						usage: memoria.usedByProcess,
						total: memoria.max
					},
					cpu: {
						usage: percentageCPU
					}
				}
			})
            };
			await fetch(link, options)
		}, 10 * 1000)
		} catch (err) {
			console.error(err)
		}
});