const express = require('express')
const app = express()
const port = 3000

const postRouter = require('./routers/postRouter.js')

app.use(express.json())

app.use('/post', postRouter)

app.get('/', (req, res) => {
    res.send('homepage')

    console.log(req.body)
})

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port)
})