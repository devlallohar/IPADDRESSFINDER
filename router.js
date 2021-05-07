const express = require('express');
const route = express.Router();
const {body} = require('express-validator');
const controller = require('./controller');

route.post('/ipaddress',[ body('ip').notEmpty().withMessage("IP should not be empty")],controller.call)

module.exports = route;
