const posts = require('../data/posts.js')
console.log(posts)

const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    res.json(posts[req.params.id])
}

const store = (req, res) => {
    res.send('Aggiungo post')
}

const update = (req, res) => {
    res.send('Modifico completamente il post')
}

const modify = (req, res) => {
    res.send('Modifico parzialmente il post')
}

const destroy = (req, res) => {
    res.send('Elimino il post')
}

module.exports = {index, show, store, update, modify, destroy}