const notFound = (req, res, next) => {
    res.status(404)
    res.json({
        error: '404 Not Found',
        message: 'Page not found'
    })
}

module.exports = notFound