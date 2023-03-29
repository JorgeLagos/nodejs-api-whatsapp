const { request, response } = require('express')

const getWelcome = async (req=request, res=response) => {
    res.status(200).json({
        message: 'getWelcome'
    })
}

module.exports = { 
    getWelcome
}
