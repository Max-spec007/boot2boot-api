const mongoose = require('mongoose')
const rsvpSchema = require('./rsvp')

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
  rsvps: [rsvpSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', eventSchema)
