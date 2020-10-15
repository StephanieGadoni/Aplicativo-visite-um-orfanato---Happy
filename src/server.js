
// importar plugin, biblioteca
const express = require('express');

// iniciando o express biblioteca
const server = express()

// criar uma rota
server.get('/', () => {
console.log('executando')

})

// ligar o servidor 
server.listen(5500)