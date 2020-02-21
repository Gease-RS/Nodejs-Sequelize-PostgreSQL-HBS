const app = require('./server').app
const debug = require('debug')
const CONFIG = require('./config')

app.listen(CONFIG.SERVVER_PORT, () => debug.log('Server running on http://localhost:3333/'))
