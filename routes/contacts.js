const express = require("express");

const router = express.Router();


router.get("/", (req, res)=>{
    res.send("get all in Contacts");
});

router.post("/", (req, res)=>{
    res.send("Add Contact");
});

router.put("/:id", (req, res)=>{
    res.send("Update Contact");
});

router.delete("/:id", (req, res)=>{
    res.send("Delete Contact");
});

module.exports = router;