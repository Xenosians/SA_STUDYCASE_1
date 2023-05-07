const Device = require('../models/device');
const Topology = require('../models/topology');

module.exports = class ViewNetworkStatusController{
    static PostDevice = (req,res) =>{
        if(!req.body.device_id && !req.body.device_name && !req.body.device_ip && !req.body.device_type && !req.body.device_location && !req.body.device_status )
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        let device = Device(req.body.device_name ,req.body.device_ip ,req.body.device_type ,req.body.device_location ,req.body.device_status);
        device.create(req.body.device_id)
            .then(([result]) => {
                return res.status(200).json({ 'message': 'device active' , 'data' : device});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            });
    }

    static PutDevice = (req,res) =>{
        // Access the 'device_id' parameter from the request object
        const device_id = req.params.device_id;
        if(!device_id && !req.body.device_name && !req.body.device_ip && !req.body.device_type && !req.body.device_location && !req.body.device_status )
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        let device = Device(req.body.device_name ,req.body.device_ip ,req.body.device_type ,req.body.device_location ,req.body.device_status);
        device.update(device_id)
            .then(([result]) => {
                return res.status(200).json({ 'message': 'device updated' , 'data' : device});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            });

    }

    static DeleteDevice = (req,res) =>{
        // Access the 'device_id' parameter from the request object
        const device_id = req.params.device_id;
        if(!device_id)
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        Device.delete(device_id)
            .then(([result]) => {
              return res.status(200).json({ 'message': 'device removed'});
            })
            .catch(err => {
              console.log(err);
              return res.status(400).json({ 'message': err.message });
            });
    }

    //=============

    static PostTopo = (req,res) =>{
        if(!req.body.topology_id && !req.body.topology_name && !req.body.topology_description && !req.body.devices)
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        let topo = Topology(req.body.topology_name,req.body.topology_description,req.body.devices);
        topo.create(req.body.topology_id)
            .then(([result]) => {
                return res.status(200).json({ 'message': 'topology active' , 'data' : device});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            });
    }

    static PutTopo = (req,res) =>{
        // Access the 'device_id' parameter from the request object
        const topology_id = req.params.topology_id;
        if(!topology_id && !req.body.topology_name && !req.body.topology_description && !req.body.devices)
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        let topo = Topology(req.body.topology_name,req.body.topology_description,req.body.devices);
        topo.update(device_id)
            .then(([result]) => {
                return res.status(200).json({ 'message': 'topology updated' , 'data' : device});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            });

    }

    static DeleteTopo = (req,res) =>{
        // Access the 'device_id' parameter from the request object
        const topology_id = req.params.topology_id;
        if(!topology_id)
        {
            return res.status(400).json({'message' : 'error invalid body'});
        }

        Topology.delete(topology_id)
            .then(([result]) => {
              return res.status(200).json({ 'message': 'topology removed'});
            })
            .catch(err => {
              console.log(err);
              return res.status(400).json({ 'message': err.message });
            });
    }
}