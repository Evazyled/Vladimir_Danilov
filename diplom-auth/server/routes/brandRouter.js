let Router = require('express')
let router = new Router()
let brandController = require('../controllers/brandController')

router.post('/',brandController.create)
router.get('/',brandController.getAll)

module.exports = router