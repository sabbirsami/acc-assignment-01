const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users.route");

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("ACC Assignment");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
