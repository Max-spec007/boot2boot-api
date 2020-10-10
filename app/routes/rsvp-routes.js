const express = require('express')
const router = express.Router()
const passport = require('passport')
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership

const Event = require('./../models/event')
const handle404 = require('../../lib/custom_errors')

const requireToken = passport.authenticate('bearer', { session: false })

router.post('/rsvps', requireToken, (req, res, next) => {
  // get the review data from the body of the request
  const rsvpData = {}
  rsvpData.owner = req.user.id
  // add user to rsvp
  // find the event
  Event.findById(req.body.eventId)
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

// DESTROY
// DELETE /examples/5a7db6c74d55bc51bdf39793
router.delete('/rsvps/:id', requireToken, (req, res, next) => {
  // const rsvpId = (req.params.id)
  Event.findById(req.params.id)
    .then(handle404)
    .then(event => {
      console.log('EVENT', event)
      const rsvpArray = event.rsvps
      const thisRsvp = rsvpArray.filter(rsvp => {
        console.log('ANYTHING DOESNT MATTER AGAIN', typeof (req.user.id))
        if (rsvp.owner.toString() === req.user.id.toString()) {
          return rsvp
        }
      })
      const a = thisRsvp[0]
      // mongoose like findById
      // const rsvp = event.rsvps.find({ owner.id: req.body.user.id })
      // throw an error if current user doesn't own `example`
      // delete the example ONLY IF the above didn't throw
      a.remove()
      event.save()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router
