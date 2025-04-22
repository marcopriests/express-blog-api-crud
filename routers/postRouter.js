const express = require('express')
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})
//show
router.get('/:id', (req, res) => {
    res.send('Singolo post')
})
//store
router.post('/', (req, res) => {
    res.send('Aggiungo post')
})
//update
router.put('/:id', (req, res) => {
    res.send('Modifico completamente il post')
})
//modify
router.patch('/:id', (req, res) => {
    res.send('Modifico parzialmente il post')
})
//destroy
router.delete('/:id', (req, res) => {
    res.send('Elimino il post')
})

module.exports = router