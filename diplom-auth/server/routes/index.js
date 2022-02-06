let Router = require('express')
let router = new Router()

let deviceRouter = require('./deviceRouter')
let userRouter = require('./userRouter')
let brandRouter = require('./brandRouter')
let typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router