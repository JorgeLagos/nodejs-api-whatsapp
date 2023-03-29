require('dotenv').config()
require('colors')

const Server = require('./servers/server')

const server = new Server()

server.listen()
