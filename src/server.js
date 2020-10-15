const express = require('express');
const server = express()
// criar uma rota
server.get('/', () => {
console.log('executando')

})

// ligar o servidor 