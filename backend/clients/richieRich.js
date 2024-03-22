const WebSocket = require("ws");
const axios = require("axios");

const endpoint = 'http://localhost:8082/v1/stream'
const ws = new WebSocket(endpoint)

async function getRichieRichResponse(prompt) {
  try {
    const response = await axios.post(
      "http://localhost:8082/v1/chat/completions",
      {
        prompt,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getRichieRichStream(prompt, socket) {
  try {
    frontend = new WebSocket(socket)

    ws.on('open', () => {
      console.log('connected')
      ws.send(prompt)
    })


    ws.on('message', (data) => {
      console.log(data)
      frontend.send(data)
    })

        // Event: WebSocket connection closed
    ws.on('close', () => {
      console.log('Disconnected from WebSocket server');
    });

    // Event: WebSocket connection error
    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    frontend.close()
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getRichieRichResponse,
  getRichieRichStream
};
