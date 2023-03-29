const msgTypeText = (phoneNumber, text) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "text",
        "text": {
            "body": text
        }
    })
}

const msgTypeTextFormat = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "text",
        "text": {
            "body": "Hola mundo, *Hola mundo*, _Hola mundo_, ~Hola mundo~, ````Hola mundo```"
        }
    })
}

const msgTypeImage = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "image",
        "image": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
        }
    })
}

const msgTypeAudio = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    })
}

const msgTypeVideo = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4",
            "caption": "Your Video"
        }
    })
}

const msgTypeDocument = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            "filename": "Your Document"
        }
    })
}

const msgTypeLocation = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "location",
        "location": {
            "latitude": "-33.46456539306906",
            "longitude": "-70.61064429606428",
            "name": "Estadio Nacional",
            "address": "Av. Grecia 2001, Ñuñoa, Región Metropolitana"
        }
    })
}

const msgTypeButtons = (phoneNumber, text, buttons) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": text
            },
            "action": {
                "buttons": buttons
                // "buttons": [
                //     {
                //         "type": "reply",
                //         "reply": {
                //             "id": "btn_001",
                //             "title": "Razon Social"
                //         }
                //     },
                //     {
                //         "type": "reply",
                //         "reply": {
                //             "id": "btn_002",
                //             "title": "RUT"
                //         }
                //     }
                // ]
            }
        }
    })
}

const msgTypeList = (phoneNumber, text, sections) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": text
            },
            // "footer": {
            //     "text": "Select an option"
            // },
            "action": {
                "button": "Ver opciones",
                "sections": sections
            }
        }
    })
}

module.exports = {
    msgTypeText,
    msgTypeTextFormat,
    msgTypeImage,
    msgTypeAudio,
    msgTypeVideo,
    msgTypeDocument,
    msgTypeLocation,
    msgTypeButtons,
    msgTypeList
}
