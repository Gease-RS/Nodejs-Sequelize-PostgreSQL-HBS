
const DB = {
    DATABASE: 'puzzlebounty',
    USERNAME: 'postgres',
    PASSWORD: 'postgres'
}

const DATABASE_URI = `postgres://${DB.USERNAME}:${DB.PASSWORD}@localhost:5432/${DB.DATABASE}`

const SERVER_PORT = 3333


const CONFIG = {
    DATABASE_URI,
    SERVER_PORT,
}

module.exports = exports = CONFIG