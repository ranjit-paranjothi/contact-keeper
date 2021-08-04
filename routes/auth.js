const express = require("express");

const router = express.Router();


router.get("/", (req, res)=>{
    res.send("get logged in User");
});

router.post("/", (req, res)=>{
    res.send("Log in User");
});

module.exports = router;