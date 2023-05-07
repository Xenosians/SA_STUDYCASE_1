const db = require('../utils/db');

module.exports = class NetworkAnalysis{
    constructor(network_analysis_id,network_analysis_start_date,network_analysis_end_date,network_analysis_type){
        this.network_analysis_id = network_analysis_id;
        this.network_analysis_start_date = network_analysis_start_date;
        this.network_analysis_end_date = network_analysis_end_date;
        this.network_analysis_type = network_analysis_type ;
    }

    static findByTime(network_analysis_start_date,network_analysis_end_date){
        return db.execute(
            'SELECT * FROM event WHERE network_analysis_start_date = ? AND network_analysis_end_date = ?'
            ,[network_analysis_start_date,network_analysis_end_date]
        );
    }

}
