const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

// In-memory storage
const users = [];
const messages = [];

app.use(bodyParser.json());

// Register a new user
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: "Username already taken" });
  }

  // Store the user in memory
  users.push({ username, password });
  res.status(200).json({ message: "User registered successfully" });
});

// Authenticate users
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful" });
});

// Send a message to another user
app.post("/send-message", (req, res) => {
  const { sender, receiver, message } = req.body;

  // Check if the sender and receiver exist
  const senderExists = users.some((user) => user.username === sender);
  const receiverExists = users.some((user) => user.username === receiver);

  if (!senderExists || !receiverExists) {
    return res.status(404).json({ error: "User not found" });
  }

  // Store the message in memory
  messages.push({ sender, receiver, message });
  res.status(200).json({ message: "Message sent successfully" });
});

// Retrieve messages for the authenticated user
app.get("/messages/:username", (req, res) => {
  const { username } = req.params;

  // Filter messages for the specified user
  const userMessages = messages.filter(
    (msg) => msg.sender === username || msg.receiver === username
  );

  res.status(200).json({ messages: userMessages });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
