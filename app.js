const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const mongoose = require("mongoose");
const { User } = require("./models/user");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost:27017/my-rest-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB !!! Click here"))
  .catch((err) => {
    console.log("Could not connect to MongoDB" + err);
  });

app.use(cors());

app.use(express.json());

app.use("/api/users", users);

app.use("/api/auth", auth);

app.use("/api/cards", cards);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get("/allusers", (req, res) => {
  const users = User.find({});
  console.log(users.length);
  res.send(users[0]);
});

const port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log(`Listening to port ${port}, Click http://localhost:${port}`);
});
