const client = require('../index')

client.on("warn", (e) => console.warn(e));