const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Event = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  }
},{
    collection: 'events'
});

module.exports = mongoose.model('Event', Event);