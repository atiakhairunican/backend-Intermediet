/* eslint-disable no-undef */
const product = {}
const respon = require("../Helpers/respon")
const model = require("../Models/product")

product.get = async (req, res) => {
    try {
        const result = await model.getProd()
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 400, error)
    }
}

product.search = async (req, res) => {
    try {
        const result = await model.searchProd(req.params.name)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 400, error)
    }
}

product.orderedAll = async (req, res) => {
    try {
        const {name, price, category, orderBy, order} = req.query
        const result = await model.orderedAllProd(name, price, category, orderBy, order)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 400, error)
    }
}

product.ordered = async (req, res) => {
    try {
        const result = await model.orderedProd(req.query.orderBy, req.query.order)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 400, error)
    }
}

product.add = async (req, res) => {
    try {
        const result = await model.addProd(req.body)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 500, error)
    }
}

product.update = async (req, res) => {
    try {
        const result = await model.updateProd(req.body)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 502, error)
    }
}

product.del = async (req, res) => {
    try {
        const result = await model.delProd(req.query.id)
        return respon(res, 200, result)
    } catch (error) {
        return respon(res, 404, error)
    }
}

module.exports = product