const app = require('./src/server').app
const debug = require('debug')
const CONFIG = require('./config')

app.listen(CONFIG.SERVER_PORT, () => debug.log(`Server running on http://localhost:${CONFIG.SERVER_PORT}`))
