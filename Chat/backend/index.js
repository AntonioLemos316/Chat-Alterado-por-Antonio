const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const CHAT_ENGINE_PROJECT_ID = "e656fe09-939a-4b37-ad49-a5dcb119782f";
const CHAT_ENGINE_PRIVATE_KEY = "1aec8e39-1eaf-41c7-b082-e16736408b08";

app.post("/authenticate", async (req, res) => {
  const { username, secret, email, first_name, last_name } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { 
        username, secret, email, first_name, last_name
      },
      {
        headers: {"private-key": CHAT_ENGINE_PRIVATE_KEY}
      }
  )
  return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.response.status).json(err.response.data)
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // Fetch this user from Chat Engine in this project!
  // Docs at rest.chatengine.io
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": CHAT_ENGINE_PROJECT_ID,
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);