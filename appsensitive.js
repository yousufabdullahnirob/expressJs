const express = require("express");
const app = express();
app.enable("x-powered-by");
app.all("/about", (req, res) => {
    res.send("Hello World!");
});

app.param("id", (req, res, next, id) => {
    req.id = id;
    next();
});

app.get("/user/:id", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
