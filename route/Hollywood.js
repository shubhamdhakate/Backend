const express = require('express')
const hollyController = require('../component/Hollywood')

const hollyRouter = express.Router()
hollyRouter.route("/holly")
.get(hollyController.apiController)
module.exports = hollyRouter