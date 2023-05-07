const express = require('express');
const userController = require('../controllers/user');

const Router = express.Router();

Router.post('/users', userController.postUser);

module.exports = Router;
