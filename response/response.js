const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// response of render :
app.get("/aboutlist", (req, res) => {
    res.render("about", {
        name: "John Doe",
        age: 30,
        city: "New York"
    });
    console.log(res.headersSent);
});

// response of text :
app.get("/about-text", (req, res) => {
    res.send("About List");
    console.log(res.headersSent);
});

app.get("/hello", (req, res) => {
    res.end("Hello World");
    console.log(res.headersSent);
});

app.get("/json", (req, res) => {
    res.json({
        name: "John Doe",
        age: 33,
        city: "Dhaka"
    });
    console.log(res.headersSent);
});

app.get("/html", (req, res) => {
    res.sendStatus(200);
    console.log(res.headersSent);
});

// response format :
app.get("/format", (req, res) => {
    res.format({
        "text/plain": () => {
            res.send("Hello World");
        },
        "text/html": () => {
            res.send("<h1>Hello World</h1>");
        },
        "application/json": () => {
            res.send({
                name: "John Doe",
                age: 30,
                city: "New York"
            });
        }
    });
});

// response of cookie :
app.get("/cookie", (req, res) => {
    res.cookie("name", "Nirob");
    res.cookie("age", 25);
    res.cookie("city", "Dhaka");
    res.send("Cookie set star milk");
});

// response of location :
app.get("/location", (req, res) => {
    res.location("/aboutlist");
    res.send("Location set");
});

// response of set :
app.get("/set", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send("Content-Type set");
});

// response of explicit render route :
app.get("/render", (req, res) => {
    res.render("about", {
        name: "John Doe",
        age: 30,
        city: "New York"
    });
    console.log(res.headersSent);
});

// response of sendFile :
app.get("/sendFile", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.ejs"));
});

app.listen(3006, () => {
    console.log("Server started on http://localhost:3006/aboutlist");
});

module.exports = app;