const { Schema, model } = require('mongoose');

const timelineSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date
    },
    isPresent: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Timeline = model('Timeline', timelineSchema);

module.exports = Timeline;