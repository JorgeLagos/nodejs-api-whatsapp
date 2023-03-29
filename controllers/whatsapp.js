const { 
    request, 
    response 
} = require('express')

const { 
    getTextMessage, 
    sendSimpleMessage, 
    sendProcessMessage 
} = require('../helpers/wsp-message')

const getWhatsapp = async (req=request, res=response) => {
    const access_token = process.env.WSP_TOKEN
    const verify_token = req.query['hub.verify_token']
    const challenge = req.query['hub.challenge']

    try {
        if (verify_token != undefined && challenge != undefined && verify_token === access_token) {
            res.status(200).send(challenge)
        } else {
            res.status(400).send()
        }
    } catch (error) {
        res.status(400).send()
    }
}

const postWhatsapp = (req=request, res=response) => {
    try {
        const entry = req.body.entry[0]

        const idEntry = entry.id
        console.log({ idEntry })

        const changes = entry.changes[0]
        const value = changes.value
        const messages = value.messages[0]

        // Obtener datos del mensaje enviado desde whatsapp
        const phoneNumber = messages.from
        const textMessage = getTextMessage(messages)

        

        // Send message
        sendProcessMessage(phoneNumber, textMessage)

        res.status(200).send('TRY - EVENT_RECEIVED')
    } catch (error) {
        res.status(200).send('CATCH - EVENT_RECEIVED')
    }
}

module.exports = { 
    getWhatsapp,
    postWhatsapp
}
