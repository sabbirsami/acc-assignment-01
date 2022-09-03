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

app.post("/user/save", (req, res) => {
    const newData = req.body;
    // const { id, name, contact, address, gender, photoUrl } = newData;
    console.log(id, name, contact, address, gender, photoUrl);
    const allUser = fs.readFileSync("./userData.json");
    const users = JSON.parse(allUser);
    users.push(newData);
    res.status(200).send(users);
});

app.patch("user/update/:id", (req, res) => {
    const allUser = fs.readFileSync("./userData.json");
    const users = JSON.parse(allUser);
    const id = Number(req.params.id);
    const updatedData = req.body;
    // console.log(updatedData);
    const index = users.findIndex((user) => user.id === id);
    if (!index) {
        if (index !== -1) {
            const result = (users[index] = { ...users[index], ...updatedData });
            // console.log(result);
            fs.writeFileSync("./userData.json", JSON.stringify(users));
            res.status(200).send(result);
        }
    } else {
        res.status(404).send("User Not Found");
    }
});

app.delete("/user/delete/:id", (req, res) => {
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
