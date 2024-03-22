const express = require("express");
const cors = require("cors");

const { getRichieRichResponse, getRichieRichStream } = require("./clients/richieRich");
const RRML2HTML = require("./utils/RRML2HTML");

const PORT = 8081;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const requestPrompt = req.body.prompt;
  const response = await getRichieRichResponse(requestPrompt);
  const responseHTML = RRML2HTML(response);
  res.send(responseHTML);
});

app.post('/stream', async (req, res) => {
  const socket = req.body.socket
  const prompt = req.body.prompt

  const resp = getRichieRichStream(prompt, socket)

  res.send('test')
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
