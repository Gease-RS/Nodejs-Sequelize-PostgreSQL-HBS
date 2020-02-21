const DB = {
    DATABASE: 'puzzebounty',
    USERNAME: 'puzzeuser',
    PASSWORD: 'postgres'
}

const DATABASE_URI = 
    process.env.DATABASE_URI || `postgres://${DB.USERNAME}:${DB.PASSWORD}@localhost:5432/${DB.DATABASE}`

const SERVER_PORT = process.env.PORT || 3333

const  DEBUG = process.env.PUZZE_DEBUG || false

const CONFIG = {
    DATABASE_URI,
    SERVER_PORT,
    DEBUG
}

exports = CONFIG