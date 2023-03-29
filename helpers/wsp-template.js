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

const msgTypeButtons = (phoneNumber, text) => {
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
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btn_001",
                            "title": "Razon Social"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "btn_002",
                            "title": "RUT"
                        }
                    }
                ]
            }
        }
    })
}

const msgTypeList = (phoneNumber) => {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": phoneNumber,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "✅ I have these options"
            },
            "footer": {
                "text": "Select an option"
            },
            "action": {
                "button": "See options",
                "sections": [
                    {
                        "title": "Buy and sell products",
                        "rows": [
                            {
                                "id": "main-buy",
                                "title": "Buy",
                                "description": "Buy the best product your home"
                            },
                            {
                                "id": "main-sell",
                                "title": "Sell",
                                "description": "Sell your products"
                            }
                        ]
                    },
                    {
                        "title": "📍center of attention",
                        "rows": [
                            {
                                "id": "main-agency",
                                "title": "Agency",
                                "description": "Your can visit our agency"
                            },
                            {
                                "id": "main-contact",
                                "title": "Contact center",
                                "description": "One of our agents will assist you"
                            }
                        ]
                    }
                ]
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
