
// importar plugin, biblioteca
const express = require('express');

// iniciando o express biblioteca
const server = express()

// criar uma rota
server.get('/', (request, response) => {
return response.send('oi')

})

// ligar o servidor 
server.listen(5500)
