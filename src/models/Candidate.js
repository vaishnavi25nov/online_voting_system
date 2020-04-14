const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Candidate = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    party: {
        type: String
    },
    constitutionId: {
        type: String
    }
}, {
    collection: 'Candidate'
});

module.exports = mongoose.model('Candidate', Candidate);