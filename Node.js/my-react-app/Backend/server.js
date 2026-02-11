import express from "express";
import os from "os";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/user", (req, res) => {
  res.json({ message: JSON.stringify(os.userInfo()) });
});

app.get("/hostname", (req, res) => {
  res.json({ message: os.hostname() });
});

app.get("/totalmem", (req, res) => {
  res.json({ message: os.totalmem().toString() });
});

app.get("/freemem", (req, res) => {
  res.json({ message: os.freemem().toString() });
});

app.get("/arch", (req, res) => {
  res.json({ message: os.arch() });
});

// Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
