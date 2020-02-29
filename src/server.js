const express = require('express')
const bp = require('body-parser')
const exhbs = require('express-hbs')
const path = require('path')

const app = express()

const routes = {
    api: require('./routes/api').route,
    pages: require('./routes/pages').route
}

app.use(bp.json())
app.use(bp.urlencoded({ extended: true}))

app.engine('hbs', exhbs.express4({
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: __dirname + '/views/layouts/main.hbs'
}))
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

exhbs.registerHelper('equal', function(lvalue, rvalue, options) {
    if(arguments.length < 3)
        throw new Error('Handlebars Helper equal needs 2 parameters')
    if( lvalue != rvalue ) {
        return options.inverse(this)
    } else { 
        return options.fn(this)
    }
})

app.use('/api', routes.api)
app.use('/', routes.pages)
app.use('/', express.static(path.join(__dirname, 'public_static')))

exports.app = app