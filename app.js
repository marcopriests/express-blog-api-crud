const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('homepage')
})

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port)
})