const posts = require('../data/posts.js')
//console.log(posts)

const index = (req, res) => {
    const tag = req.query.tag
    console.log(tag)

    let filteredPosts = posts

    if(tag) {
        filteredPosts = posts.filter((post) => post.tags.includes(tag))
    }

    res.json(filteredPosts)
}

const show = (req, res) => {
    const id = parseInt(req.params.id)

    const post = posts.find((post) => post.id === id)

    if(!post) {
        res.status(404)
        return res.json({
            status: 404,
            error: 'not found',
            message: 'Post non trovato'
        })
    }

    res.json(post)
}

const store = (req, res) => {
    //creo un nuovo id
    const newId = posts[posts.length - 1].id + 1

    //destrutturo il corpo della richiesta
    const {title, content, image, tags} = req.body

    //creo un nuovo post con le informazioni recuperate dal corpo della richiesta
    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    }

    //aggiungo il nuovo post nell'array di oggetti
    posts.push(newPost)

    //controllo
    console.log(posts)

    //restituisco lo status e il nuovo post
    res.status(201)
    res.json(newPost)

}

const update = (req, res) => {
    res.send('Modifico completamente il post')
}

const modify = (req, res) => {
    res.send('Modifico parzialmente il post')
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id)

    const post = posts.find((post) => post.id === id)

    if(!post) {
        res.status(404)
        return res.json({
            status: 404,
            error: 'not found',
            message: 'Post non trovato'
        })
    }

    posts.splice(posts.indexOf(post), 1)

    console.log(posts)

    res.status(204)
}

module.exports = {index, show, store, update, modify, destroy}