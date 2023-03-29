const { Router } = require('express')
// const { check } = require('express-validator')

const { getWhatsapp, postWhatsapp } = require('../controllers/whatsapp')

// const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.get('/', getWhatsapp)

router.post('/', postWhatsapp)

module.exports = router
