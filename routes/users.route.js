const express = require("express");
const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.send("All user found");
    })
    .post((req, res) => {
        res.send("All user found");
    });
