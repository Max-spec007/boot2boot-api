#!/bin/bash

API="http://localhost:4741"
URL_PATH="/events"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "event": {
    "title": "'"${TITLE}"'",
    "notes": "'"${NOTES}"'",
    "date": "'"${DATE}"'",
    "rsvps": "'"${rsvp}"'"
    }
  }'

echo
