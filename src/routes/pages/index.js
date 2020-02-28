const route = require('express').Router()

route.get('/leaderboard', (req, res) => {
    res.render('pages/leaderboard', {})
})

exports.route = route