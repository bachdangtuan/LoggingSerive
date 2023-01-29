const express = require('express')
const {LoggingRouter} = require("./logging.router");

const rootRouter = express.Router();

rootRouter.use('/logging', LoggingRouter)
module.exports = {rootRouter}
