const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users.route");
const fs = require("fs");

app.use(express.json());

app.get("/user/all", (req, res) => {
    const allUser = fs.readFileSync("./userData.json");
    const users = JSON.parse(allUser);
    res.status(200).send(users);
});

app.get("/user/random", (req, res) => {
    const allUser = fs.readFileSync("./userData.json");
    const users = JSON.parse(allUser);
    const totalUsers = users.length;
    const randomNumber = Math.ceil(Math.random() * totalUsers);
    const randomUser = users.filter((user) => user.id === randomNumber);
    res.send(randomUser);
});
// app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("ACC Assignment");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
