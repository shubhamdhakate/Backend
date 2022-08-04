const express = require('express')
const techController = require('../component/Technology')

const techRouter = express.Router()
techRouter.route("/tech")
.get(techController.apiController)
module.exports = techRouter