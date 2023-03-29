const { Router } = require('express')
// const { check } = require('express-validator')

const { getWelcome } = require('../controllers/welcome')

// const { validateFields } = require('../middlewares/validate-fields')

const router = Router()

router.get('/', [], getWelcome)

module.exports = router
