const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema({
  rsvp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('RSVP', rsvpSchema)
