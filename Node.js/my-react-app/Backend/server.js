import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./data.txt";

// WRITE
app.post("/write", (req, res) => {
  fs.writeFile(FILE, req.body.message, (err) => {
    if (err) {
      return res.status(500).json({ message: "Write failed" });
    }
    res.json({ message: "Data written successfully" });
  });
});

// READ
app.get("/read", (req, res) => {
  fs.readFile(FILE, "utf8", (err, data) => {
    if (err) {
      return res.json({ message: "File is empty or not found" });
    }
    res.json({ message: data });
  });
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
