/* eslint-disable no-undef */
const express = require("express")
const router = express.Router()
const control = require("../Controllers/product")

router.get("/", control.get)
router.get("/:name", control.search)
router.get("/search/ordered", control.ordered)
router.post("/", control.add)
router.put("/", control.update)
router.delete("/:id", control.del)

module.exports = router