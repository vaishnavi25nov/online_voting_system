const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Members = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  contact: {
      type: Number
  },
  email: {
      type: String
  },
  about_member : {
      type: String
  }
},{
    collection: 'Members'
});

module.exports = mongoose.model('Members', Members);