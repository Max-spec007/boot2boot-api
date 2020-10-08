const express = require('express')
const router = express.Router()
const passport = require('passport')

const Event = require('./../models/event')
const handle404 = require('./../lib/custom_errors')

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE
// POST /reviews/
router.post('/rsvps', requireToken, (req, res, next) => {
  // get the review data from the body of the request
  const rsvpData = req.body.rsvp
  console.log('REQ BODY IS HERE', req.body)
  const eventId = rsvpData.eventId
  Event.findById(eventId)
    .then(handle404)
    .then(event => {
      event.rsvps.push(rsvpData)
      return event.save()
    })
    // send responsne back to client
    .then(event => res.status(201).json({event: event}))
    .catch(next)
})
// DESTROY
// DELETE /reviews/:id
router.delete('/rsvps/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  Event.findOne({ 'rsvps._id': id })
    .then(handle404)
    .then(event => {
      event.rsvps.id(id).remove()
      return event.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
// UPDATE
// PATCH /reviews/:id
router.patch('/rsvps/:id', requireToken, (req, res, next) => {
  const id = req.params.id
  const rsvpData = req.body.rsvp
  Event.findOne({
    'rsvps._id': id
  })
    .then(handle404)
    .then(event => {
      const rsvp = event.rsvps.id(id)
      rsvp.set(rsvpData)
      return event.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})
module.exports = router
