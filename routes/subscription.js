const express = require('express');
const subsController = require('../controllers/subscription');

const Router = express.Router();

Router.post('/subs/create',subsController.postSubs);

module.exports = Router;