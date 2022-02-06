let Router = require('express')
let router = new Router()
let deviceController = require('../controllers/deviceController')

router.post('/',deviceController.create)
router.get('/',deviceController.getAll)
router.get('/:id',deviceController.getOne)

module.exports = router