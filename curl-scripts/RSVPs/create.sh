curl 'http://localhost:4741/' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "rsvp": {
      "eventId": "'"${EVENT_ID}"'"
    }
  }'
