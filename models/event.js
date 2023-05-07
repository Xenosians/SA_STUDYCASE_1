const db = require('../utils/db');

module.exports = class Event{
    constructor(event_id,event_type,event_time,event_desc,dev_id){
        this.event_id = event_id;
        this.event_type = event_type;
        this.event_time = event_time;
        this.event_desc = event_desc ;
        this.dev_id = dev_id;
    }

    static findByTime(event_time){
        return db.execute(
            'SELECT * FROM event WHERE event_time = ?'
            ,[event_time]
        );
    }

}
