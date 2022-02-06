let {Brand} = require('../models/models')
let ApiError = require('../error/ApiError')


class BrandController {
    async create(req, res) {
        let {name} = req.body
        let brands = await Brand.create({name})
        return res.json(brands)

    }

    async getAll(req, res) {
        let brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()