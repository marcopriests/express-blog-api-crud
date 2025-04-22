const express = require('express')
const app = express()
const port = 3000

const postRouter = require('./routers/postRouter.js')

app.use('/post', postRouter)

app.get('/', (req, res) => {
    res.send('homepage')
})

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port)
})