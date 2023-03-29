const express = require('express')
const cors = require('cors')
// const fileUpload = require('express-fileupload')

// const { dbConnection } = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        this.paths = {
            welcome: '/api/welcome',
            whatsapp: '/api/whatsapp'
        }

        // conexion db
        // this.conectorDB()
        this.middlewares()
        this.routes()
    }

    // async conectorDB() {
    //     await dbConnection()
    // }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        // this.app.use(express.static('public'))

        // this.app.use(fileUpload({
        //     useTempFiles: true,
        //     tempFileDir: '/tmp/',
        //     createParentPath: true
        // }))
    }

    routes() {
        this.app.use(this.paths.welcome, require('../routes/welcome'))
        this.app.use(this.paths.whatsapp, require('../routes/whatsapp'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`[express] listening port ${this.port}`.cyan)
        })
    }
}

module.exports = Server
