This application was built for creating events, browsing lists of events, and having the ability to RSVP to one or many events.

**Technologies used**: Mongoose, MongoDb, Node, Express.

**User Stories**:
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As an unregistered user, I would like to see all events.
As a signed in user, I would like to RSVP to an event.
As a signed in user, I would like to create my own event.
As a signed in user, I would like to update my own events.
As a signed in user, I would like to delete my own events.

**Github repos**:
- API: https://github.com/Boot2boot/boot2boot-api
- React: https://github.com/Boot2boot/boot2boot-react-client

**Deployed sites**:
- front end: https://boot2boot.github.io/boot2boot-react-client/#/
- back end: https://gentle-eyrie-69733.herokuapp.com/

**Wireframes and ERD**:
ERD: https://imgur.com/3AU0wdE
Wireframes: https://imgur.com/bvJcSJu

The development process was started by creating an event model and its respective routes. The user needed to be able to sign up and create an account, then sign in to be able to create an event. That same user needed to able to RSVP to any event previously created. And any user had to be able to see all events created. The next step was to create the RSVP subdocument on the event model. We then proceeded to build the RSVP routes for the create and delete actions.

**Catalog of Routes (paths and methods) that the API expects**:
POST request to /sign-up to sign a user up
POST request to /sign-in to sign a user in
PATCH request to /change-password to change a user's password
DELETE request to /sign-out to sign a user out

GET request to /events for the index of events
GET request to /events/:id to show a single event
POST request to /events to create an event
PATCH request to /events/:id to update an event
DELETE request to /events/:id to delete an event

POST request to /rsvps to RSVP to an event
DELETE request to /rsvps/:id to delete your RSVP to the event
