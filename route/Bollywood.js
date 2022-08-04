const express = require('express')
const bollyController = require('../component/Bollywood')

const bollyRouter = express.Router()
bollyRouter.route("/bolly")
.get(bollyController.apiController)
module.exports = bollyRouter
