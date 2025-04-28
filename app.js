const express = require('express')
const app = express()
const port = 3000

const notFound = require('./middlewares/notFound.js')
const errorsHandler = require('./middlewares/errorsHandler.js')
const postRouter = require('./routers/postRouter.js')

app.use(express.json())

app.use('/post', postRouter)

app.get('/', (req, res) => {
    res.send('homepage')
})

app.use(notFound)
app.use(errorsHandler)

app.listen(port, () => {
    console.log('Server in ascolto alla porta ' + port)
})