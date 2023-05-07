const express = require('express');
const networkAnalysis = require('../controllers/network_analysis');

const Router = express.Router();

Router.get('/network_analysis',networkAnalysis.findByDate);

module.exports = Router;