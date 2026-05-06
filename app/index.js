const express = require("express");
const app = express();
const PORT = 3000;

// Simple route
app.get("/", (req, res) => {
  res.send("DevSecOps CI/CD Pipeline is Running 🚀");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Simulated vulnerable route (for security testing)
app.get("/user", (req, res) => {
  const user = req.query.name;
  res.send(`Hello ${user}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});