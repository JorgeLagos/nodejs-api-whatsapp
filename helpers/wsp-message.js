const { 
    msgTypeText,
    msgTypeTextFormat,
    msgTypeImage,
    msgTypeAudio,
    msgTypeVideo,
    msgTypeDocument,
    msgTypeLocation,
    msgTypeButtons,
    msgTypeList
} = require('./wsp-template')


const {
    buttonsRazonRut
} = require('./wsp-buttons')


const { sendApiMessageWhatsapp } = require('../services/whatsapp')

const getTextMessage = (message) => {
    const { type, text } = message

    let textMsg
    switch (type) {
        case 'text':
            textMsg = text.body
            break;
        
        case 'interactive':
            const interactive = message.interactive
            const type_interactive = message.interactive.type
            if (type_interactive == 'button_reply') textMsg = interactive.button_reply.title
            if (type_interactive == 'list_reply') textMsg = interactive.list_reply.title
            break;
        
        default:
            console.log('Sin message')
            break;
    }

    return textMsg
}

const sendSimpleMessage = (phoneNumber, textMessage) => {
    let data
    switch (textMessage.toLowerCase()) {
        case 'text': data = msgTypeText(phoneNumber, textMessage); break;
        case 'format': data = msgTypeTextFormat(phoneNumber); break;
        case 'image': data = msgTypeImage(phoneNumber); break;
        case 'audio': data = msgTypeAudio(phoneNumber); break;
        case 'video': data = msgTypeVideo(phoneNumber); break;
        case 'document': data = msgTypeDocument(phoneNumber); break;
        case 'location': data = msgTypeLocation(phoneNumber); break;
        case 'buttons': data = msgTypeButtons(phoneNumber); break;
        case 'list': data = msgTypeList(phoneNumber); break;
        default: data = msgTypeText(phoneNumber, 'No te entiendo'); break;
    }
    sendApiMessageWhatsapp(data)
}

const sendProcessMessage = (phoneNumber, textMessage) => {
    console.log(textMessage.toLowerCase())
    let data

    if (['hi', 'hello', 'holi', 'hola', 'holiwis'].includes(textMessage.toLowerCase())) {
        followUp = ''
        text = `¡Hola! Bienvenid@ a Coagra Whatsapp.\n\nPara comenzar, por favor selecciona una opcion de registro`
        data = msgTypeButtons(phoneNumber, text, buttonsRazonRut())

    } else if (['razon social'].includes(textMessage.toLowerCase())) {
        followUp = 'dispatch-address'
        text = `Perfecto, indicanos tu Razon Social`
        data = msgTypeText(phoneNumber, text)

    } else if (['rut'].includes(textMessage.toLowerCase())) {
        followUp = 'dispatch-address'
        text = `Perfecto, indicanos tu R.U.T`
        data = msgTypeText(phoneNumber, text)

    } else if (['dispatch-address'].includes(followUp)) {
        followUp = 'quantity-requested'
        text = `Ahora indicanos la dirección de despacho`
        data = msgTypeText(phoneNumber, text)

    } else if (['quantity-requested'].includes(followUp)) {
        text = `Perfecto, ahora ingresa la cantidad solicitada`
        data = msgTypeText(phoneNumber, text)

    } else {
        data = msgTypeText(phoneNumber, 'No te entiendo')
    }
    console.log(followUp)
    sendApiMessageWhatsapp(data)
}

module.exports = {
    getTextMessage,
    sendSimpleMessage,
    sendProcessMessage
}