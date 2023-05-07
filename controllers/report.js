const Event = require('../models/report')

module.exports = class ReportCotroller {
    static findByDate = (req, res, next) => {
        if (!req.query.report_start_date && !req.query.report_end_date) {
            return res.status(400).json({ 'message': 'date is not found' });
        }

        Event.findByTime(req.query.report_start_date,req.query.report_end_date)
            .then(([result]) => {
                const eventData = result[0];
                return res.status(200).json({ 'data': eventData });
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({ 'message': err.message });
            })

    }

    static findAll = (req,res,next) => {
        Event.getAll()
            .then(([result]) => {
                const eventData = result[0];
                return res.status(200).json({'data' : eventData});
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json({'message' : err.message});
            })
    }
}