const Sequelize = require('sequelize')
const CONFIG = require('../../config')

const db = new Sequelize(CONFIG.DATABASE_URI)

const User = db.define('user', {
    id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: Sequelize.DataTypes.STRING
})

const Task = db.define('task', {
    id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: Sequelize.DataTypes.STRING,
    description: Sequelize.DataTypes.STRING,
    bounty: Sequelize.DataTypes.INTEGER,
    instances: Sequelize.DataTypes.INTEGER,
    status: Sequelize.DataTypes.ENUM('new', 'done')
})

Task.belongsTo(User)
User.hasMany(Task)

const Claim = db.define('claim', {
    id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: Sequelize.DataTypes.ENUM('submitted', 'accepted', 'rejected', 'revoked', 'disputed')
})

Claim.belongsTo(User)
User.hasMany(Claim)

Claim.belongsTo(Task)
Task.hasMany(Claim)

db.sync({
    logging: CONFIG.DEBUG
})

exports.db = db
