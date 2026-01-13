const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.get("/", (req, res) => {
    console.log(req.secure);
    res.send("Hello World!");
});
app.listen(3004, () => {
    console.log("Server started on http://localhost:3004");
});

module.exports = app;