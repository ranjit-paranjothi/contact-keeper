const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./config/db");

connectDB();

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.get("/", (req, res)=> res.json({msg: "welcome to contact keeper API !!"}));
app.listen(PORT, () => console.log(`server started running on PORT ${PORT}`));
