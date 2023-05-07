const db = require('../utils/db');

module.exports = class Event{
    constructor(report_id,report_start_date,report_end_date,report_data,dev_id){
        this.report_id = report_id;
        this.report_start_date = report_start_date;
        this.report_end_date = report_end_date;
        this.report_data = report_data;
        this.dev_id = dev_id;
    }

    static findByTime(report_start_date,report_end_date){
        return db.execute(
            'SELECT * FROM report WHERE report_start_date = ? AND report_end_date = ?'
            ,[report_start_date,report_end_date]
        );
    }

    static getAll(){
        return db.execute(
            'SELECT * FROM report'
        );
    }

}

