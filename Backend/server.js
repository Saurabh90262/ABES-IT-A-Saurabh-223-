const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  const student = [
    {
      id: 1,
      name: "John Doe",
      class: "10th Grade",
    },
    {
      id: 2,
      name: "Jane Smith",
      class: "12th Grade",
    },
  ];
  res.json(student);
});

app.get("/contactus", (req, res) => {
  res.send("<h1>Contact us for Support<h1>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
