const route = require('express').Router()
const { Task } = require('../../db').models

route.get('/add', (req, res) => {
    res.render('pages/tasks/add', {})
})

route.get('/show', (req, res) => {
    Task.findAll().then((tasks) => {
        res.render('pages/tasks/show', {tasks: tasks})
    }).catch((err) => {
        res.status(500).send({message: 'error saving task', err: err})
    })
    
})

route.post('/add', (req, res) => {
    Task.create({
        title: req.body.title,
        description: req.body.description,
        bounty: parseInt(req.body.bounty),
        instances: parseInt(req.body.instances),
        status: 'new'
    // eslint-disable-next-line no-unused-vars
    }).then((created) => {
        res.redirect('/tasks/show')
    }).catch((err) => {
        res.status(500).send({ message: 'error saving task', err: err})
    })
})

exports.route = route