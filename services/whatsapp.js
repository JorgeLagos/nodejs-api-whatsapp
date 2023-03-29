const axios = require('axios')

const sendApiMessageWhatsapp = (data) => {
    const config = {
        method: 'post',
        url: `${process.env.WSP_BUSINESS_URI}/${process.env.WSP_BUSINESS_VERSION}/${process.env.WSP_BUSINESS_ID_PHONE}/messages`,
        headers: { 
            'Authorization': `Bearer ${process.env.WSP_BUSINESS_TOKEN}`, 
            'Content-Type': 'application/json'
        },
        data: data
    }

    axios.request(config)
        .then((response) => { console.log(response.data) })
        .catch((error) => { console.log(error) })
}

module.exports = {
    sendApiMessageWhatsapp
}