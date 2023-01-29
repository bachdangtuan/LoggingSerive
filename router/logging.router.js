const express = require('express');
const {getLogging} = require("../controller/logging.controller");

const LoggingRouter = express.Router();

LoggingRouter.get("/", getLogging);


module.exports = {
    LoggingRouter
}
