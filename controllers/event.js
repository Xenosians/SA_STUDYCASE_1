const Event = require('../models/event')

module.exports = class EventController {
    static findByDate = (req, res, next) => {
        if (!req.query.event_time) {
            return res.status(400).json({ 'message': 'data is not found' });
        }

        Event.findByTime(req.query.event_time)
            .then(([result]) => {
                const eventData = result;
                return res.status(200).json({ 'message': 'data found', 'data' : eventData})
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({ 'message': err.message });
            })

    }
}