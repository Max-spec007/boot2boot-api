const express = require('express')
const router = express.Router()
const passport = require('passport')

const Event = require('./../models/event')
const handle404 = require('../../lib/custom_errors')

const requireToken = passport.authenticate('bearer', { session: false })

router.post('/rsvps', requireToken, (req, res, next) => {
  // get the review data from the body of the request
  const rsvpData = req.body.rsvp
  console.log('REQ BODY IS HERE', req.body)
  // add user to rsvp
  rsvpData.owner = req.user.id
  // find the event
  const eventId = rsvpData.eventId
  Event.findById(eventId)
    .then(handle404)
    .then(event => {
      // add the rsvp to the event
      event.rsvps.push(rsvpData)
      return event.save()
    })
    // send responsne back to client
    .then(event => res.status(201).json({event: event}))
    .catch(next)
})

module.exports = router
