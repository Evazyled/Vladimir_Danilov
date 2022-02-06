const ApiError = require("../error/ApiError");
const UserModel = require("../models/models");
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken');

let generateJwt = (id,email,role) => {
  return  jwt.sign(
        {id, email,role},
        process.env.JWT_SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration (req ,res,next) {
        let {email,password} = req.body;
        

        let candidate = await UserModel.findOne({email})
        if (candidate) {
            return next(ApiError.badRequest(`Пользователь с почтовым адресом ${email} уже существует`))
        }

        let hashPassword = await bcrypt.hash(password, 5)
        let user = await UserModel.create({email, password:hashPassword})
        let token = generateJwt(user.id, user.email, user.role)
        
        return res.json({token})
    }

    async login (req ,res, next) {
        let {email, password} = req.body;
        let user = await UserModel.findOne({email})

        if(!email || !password){
            return next(ApiError.badRequest(`Введите логин и пароль`))
        }
        if(!user) {
            return next(ApiError.badRequest(`Пользователь не найден`))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if(!comparePassword) {
            return next(ApiError.badRequest('Указан неверный пароль'))
        }
        let token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check (req ,res, next) {
       let token = generateJwt(req.user.id,  req.user.email, req.user.role)
       return res.json({token})
    }
}

module.exports = new UserController()