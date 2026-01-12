const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(req.accepts("json"));
    console.log(req.accepts("html"));
    console.log(req.accepts("text"));
    console.log(req.get('contet-type'));
    console.log(req.accepts("*"));
    res.send("Hello World!");
});

app.listen(3005, () => {
    console.log("Server started on http://localhost:3005");
});

module.exports = app;
