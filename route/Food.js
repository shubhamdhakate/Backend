const express = require('express')
const foodController = require('../component/Food')

const foodRouter = express.Router()
foodRouter.route("/food")
.get(foodController.apiController)
module.exports = foodRouter