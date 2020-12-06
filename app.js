/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')
require('dotenv').config({path : path.resolve(__dirname + '/.env')})
const express = require("express")
const server = express()
const morgan = require("morgan")
const bodyPars = require("body-parser")
const db = require("./src/Configs/db")
const router = require("./src/main")

server.use(bodyPars.urlencoded({extended: false}))
server.use(bodyPars.json())
server.use(morgan("dev"))
server.use(router)

db.connect()
    .then((res) => {
        console.log("Database connect")
    }).catch((err) => {
        console.log("Database not connected")
        console.log(err)
    });

server.listen(9000, () => {
    console.log("Service running on port 9000")
})