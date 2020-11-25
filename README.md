This application was built for creating events, browsing lists of events, and having the ability to RSVP to one or many events.

**Technologies used**: Mongoose, MongoDb, Node, Express.

**User Stories**:
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As an unregistered user, I would like to see all events.
- As a signed in user, I would like to RSVP to an event.
- As a signed in user, I would like to create my own event.
- As a signed in user, I would like to update my own events.
- As a signed in user, I would like to delete my own events.

**Github repos**:
- API: https://github.com/Max-spec007/boot2boot-api
- React: https://github.com/Max-spec007/boot2boot-react-client

**Deployed sites**:
- front end: https://max-spec007.github.io/boot2boot-react-client/#/
- back end: https://surprise-surprise-api.herokuapp.com/

**Wireframes and ERD**:
ERD: https://imgur.com/3AU0wdE
Wireframes: https://imgur.com/bvJcSJu

The development process was started by creating an event model and its respective routes. The user needed to be able to sign up and create an account, then sign in to be able to create an event. That same user needed to able to RSVP to any event previously created. And any user had to be able to see all events created. The next step was to create the RSVP subdocument on the event model. We then proceeded to build the RSVP routes for the create and delete actions.

**Unsolved problems which would be fixed in future iterations**:

- add the ability to leave a review for an event.
- categorize events inside components sorted by types of events.
- add on a location/map feature for the events created.

**Catalog of Routes (paths and methods) that the API expects**:
| Verb   | URI Pattern            |
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| DELETE | `/sign-out`            |
| PATCH  | `/change-password`     |

| Verb   | URI Pattern            |
|--------|------------------------|
| GET    | `/events`              |
| GET    | `/events/:id`          |
| POST   | `/events`              |
| PATCH  | `/events/:id`          |
| DELETE | `/events/:id`          |
| POST   | `/rsvps`               |
| DELETE | `/rsvps/:id`           |
