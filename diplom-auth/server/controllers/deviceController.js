let uuid = require('uuid')
let path = require('path')
let {Device} = require('../models/models')
let ApiError = require('../error/ApiError')
class DeviceController {
    async create(req, res,next) {
        try {
            let {name, price, brandId,typeId, info} = req.body
        let {img} = req.files;
        let fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..','static', fileName))

        let device = await Device.create({name, price, brandId,typeId, img:fileName});
        return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

        
    }

    async getAll(req, res) {
        let {brandId, typeId} = req.query;
        let devices;

        if(!brandId && !typeId){
            devices = await Device.findAll()
        }

        if(brandId && !typeId){
            devices = await Device.findAll({where:{brandId}})
        }

        if(!brandId && typeId){
            devices = await Device.findAll({where:{typeId}})
        }
        if(brandId && typeId){
            devices = await Device.findAll({where:{brandId, typeId}})
        }

        return res.json(devices)
    }

    async getOne(req, res) {

    }


}

module.exports = new DeviceController()