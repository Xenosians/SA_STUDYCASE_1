const express = require('express');
const reportController = require('../controllers/report');

const Router = express.Router();

Router.get('/api/network/report',reportController.findByDate);
Router.get('/api/network/report/all',reportController.findAll);

module.exports = Router;