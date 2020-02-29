const route = require('express').Router()

route.get('/', (req, res) => res.redirect('tasks/show'))

route.get('/leaderboard', (req, res) => {
    res.render('pages/leaderboard', {})
})

route.use('/tasks', require('./tasks').route)

//route.use('/claims', require('./claims').route)

exports.route = route