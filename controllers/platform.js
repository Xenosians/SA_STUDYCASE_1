const Platform = require('../models/platform')

module.exports = class PlatformController {
    static postPlatform = (req, res, next) => {
        if (!req.body.platform_name && !req.body.platform_api_key) {
            return res.status(400).json({ 'message': 'name and key cannot be empty' });
        }

        Platform.createPlatform(req.body.platform_name,req.body.platform_api_key,req.body.platform_api_secret)
        .then(([result])=>{
            const platformData = result;
            return res.status(200).json({'message' : 'success', 'data' : platformData});
        })
        .catch(err=>{
            return res.status(400).json({'message' : err.message});
        })
    }
}