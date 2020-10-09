const mongoose = require('mongoose')

// const rsvpSchema = new mongoose.Schema({
//   owner: { // rsvp has an owner
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
// }, {
//   timestamps: true
// })

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rsvps: {
    type: Array,
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)
