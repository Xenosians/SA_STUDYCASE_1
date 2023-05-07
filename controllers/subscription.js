const Subscription = require('../models/subscription');

module.exports = class SubsController{
    static postSubs = (req,res,next) =>{
        if(!req.body.subscription_id && !req.body.subscription_name && !req.subscription_period && !req.body.subscription_price){
            return res.status(400).json({'message' : 'error'});
        }

        Subscription.createSubs(req.body.subscription_id, req.body.subscription_name, req.body.subscription_period, req.body.subscription_price)
        .then(([result]) => {
          const subsData = result[0];
          const subscriptionId = req.body.subscription_id;
  
          Subscription.updateSubs(subscriptionId)
            .then(([result]) => {
              return res.status(200).json({ 'message': 'subscription active' , 'data' : subsData});
            })
            .catch(err => {
              console.log(err);
              return res.status(400).json({ 'message': err.message });
            });
        })
        .catch(err => {
          console.log(err);
          return res.status(400).json({ 'message': err.message });
        });
            
    }
}