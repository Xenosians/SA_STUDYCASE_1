const express = require('express');
const eventController = require('../controllers/event');

const Router = express.Router();

Router.get('/network_events',eventController.findByDate);

module.exports = Router;