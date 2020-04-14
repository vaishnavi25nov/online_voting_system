const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Constitution = new Schema({
    constitutionId: {
        type: String
    },
    state: {
        type: String
    },
    district: {
        type: String
    }
}, {
    collection: 'Constitution'
});

module.exports = mongoose.model('Constitution', Constitution);