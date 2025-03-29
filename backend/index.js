const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

const users = [];
app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.status(201).json(user);
});
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else res.status(404).json({ error: "User not found" });
});
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted" });
  } else res.status(404).json({ error: "User not found" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
