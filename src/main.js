/* eslint-disable no-undef */
const express = require("express")
const router = express.Router()
const product = require("./Routers/product")
const history = require("./Routers/history")

router.use("/product", product)
router.use("/history", history)

module.exports = router