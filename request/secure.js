const express = require("express");
const cookieParser = require("cookie-parser");

app.get("/", (req, res) => {
    console.log(req.secure);
    res.send("Hello World!");
});
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});

module.exports = app;