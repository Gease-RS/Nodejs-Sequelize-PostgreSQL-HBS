const express = require('express')
const bp = require('body-parser')

const app = express()

const routes = {
    api: require('./routes/api'),
    pages: require('./routes/pages')
}

app.use(bp.json())
app.use(bp.urlencoded({ extended: true}))

app.use('/api', routes.api)
app.get('/', (req, res) => res.send('hello'))

exports.app = app