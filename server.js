const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('El bot sigue encendido.');
});
 
module.exports = () => {
    server.listen(00000, () => {
        console.log('Servidor Listo.' + 00000);
    });
    return true;
}