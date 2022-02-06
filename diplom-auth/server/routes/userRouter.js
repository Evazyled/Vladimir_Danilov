let Router = require('express')
let router = new Router()
let userController = require('../controllers/userController')
let authMiddleWare = require('../middleware/authMiddleWare')


router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',authMiddleWare, userController.check)

module.exports = router