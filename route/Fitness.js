const express = require('express')
const fitController = require('../component/Fitness')

const fitRouter = express.Router()
fitRouter.route("/fit")
.get(fitController.apiController)
module.exports = fitRouter