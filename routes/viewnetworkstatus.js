const express = require('express');
const ViewNetworkStatusController = require('../controllers/viewnetworkstatus');

const Router = express.Router();

Router.post('/devices', ViewNetworkStatusController.PostDevice);
Router.put('/devices/update/:device_id', ViewNetworkStatusController.PutDevice);
Router.delete('/devices/delete/:device_id', ViewNetworkStatusController.DeleteDevice);

Router.post('/topology', ViewNetworkStatusController.PostTopo);
Router.put('/topology/update/:topology_id', ViewNetworkStatusController.PutTopo);
Router.delete('/topology/delete/:topology_id', ViewNetworkStatusController.DeleteTopo);

module.exports = Router;