const Event = require('../models/network_analysis')

module.exports = class NetworkAnalysisController {
    static findByDate = (req, res, next) => {
        if (!req.query.network_analysis_start_date && !req.query_network_analysis_end_date) {
            return res.status(400).json({ 'message': 'date is not found' });
        }

        Event.findByTime(req.query.network_analysis_start_date,req.query_network_analysis_end_date)
            .then(([result]) => {
                const eventData = result[0];
                return res.status(200).json({ 'data': eventData });
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            })

    }

}