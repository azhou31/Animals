var mongoose = require('mongoose');

module.exports = mongoose.model('Animals', new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is required."]
        },
        strength: Number
    }, {timestamps: true}));