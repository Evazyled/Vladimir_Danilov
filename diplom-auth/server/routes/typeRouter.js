let Router = require('express')
const typeController = require('../controllers/typeController')
let router = new Router()


router.post('/',typeController.create)
router.get('/', typeController.getAll)

module.exports = router