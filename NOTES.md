# Notes

## Issues/Concerns/Thoughts

1. This was a nice mini project to work on. I didn't quite get where I wanted to be but I figured out the goal that I wanted to accomplish and how I wanted to do it. The issue was I ran out of time before I could implement the details.

2. I want to be clear to mention that websockets aren't something that I've worked with frequently in the past nor is it something that I work with regularly. So most of the 75 minutes was spent catching up on how they work. I did use websockets on one occasion beforehand and that was for a quick freelance gig that I had found. The was really the only time I got to work with websockets.

## Future Project Plans

#### Wrap Up

If I were actually given a clear amount of time to work on this project, first of all I would complete the initial goal of allowing fluent and smooth communication with the backend. Here's how I had intended it to work: 
---
I would have implemented the connection from richierich to the front end by using the backend as a relay/proxy. Basically just create a websocket server on the front end and on receiving a message fron richierich on the backend, just immediately send that over to the frontend socket that I connect to. 

Ont the frontend I would just create or Reuse the message state for the incoming message and just updated the state everytime a new word was received through my websocket.

#### Additions
Additional goals for the project would be to:

1. of course smoothe out the small details such as metadata/changing the app name.

2. get better documentation on the additional code implemented.

3. Compartamentalize the additional code

4. Authentication

5. Integration and End to end tests.

6. Similar to chatGPT, storing previous conversations. 






