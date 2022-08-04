const express = require('express')
const homeController = require('../component/Home')

const homeRouter = express.Router()
homeRouter.route("/home")
.get(homeController.apiController)
module.exports = homeRouter