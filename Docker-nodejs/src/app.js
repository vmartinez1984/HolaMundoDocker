const express = require('express')
const app = express()

app.get('/',(req, res)=> res.send('Hola mundo de node js'))

app.listen(3000,() => console.log('Servidor iniciado'))