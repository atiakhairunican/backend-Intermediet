/* eslint-disable no-undef */
const express = require("express")
const router = express.Router()
const product = require("./Routers/product")

router.use("/product", product)

module.exports = router