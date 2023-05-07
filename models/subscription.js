const db = require('../utils/db');

module.exports = class Subscription{
    constructor(subscription_id,subscription_name,subscription_period,subscription_price,subscription_status){
        this.subscription_id = subscription_id;
        this.subscription_name = subscription_name;
        this.subscription_period = subscription_period;
        this.subscription_price = subscription_price;
        this.subscription_status = subscription_status;
    }

    static createSubs(subscription_id, subscription_name, subscription_period,subscription_price){
        return db.execute(
            'INSERT INTO `subscription` (`subscription_id`,`subscription_name`,`subscription_period`,`subscription_price`) VALUES (?,?,?,?)'
            ,[subscription_id,subscription_name,subscription_period,subscription_price]
        );
    }

    static updateSubs(subscription_id){
        return db.execute(
            'UPDATE `subscription` SET subscription_status = 1 WHERE subscription_id = ?'
            ,[subscription_id]
        );
    }
}
