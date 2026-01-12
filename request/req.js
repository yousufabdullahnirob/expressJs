const express = require("express");
const cookieParser = require("cookie-parser");
const secure = require("./secure");
const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
    console.log("BaseURL:", req.baseUrl);
    console.log("OriginalURL:", req.originalUrl);
    console.log("URL:", req.url);
    console.log("Path:", req.path);
    res.send("Welcome to the dashboard!");
});

adminRouter.get("/", (req, res) => {
    res.send("Welcome to the Admin Home!");
});

app.use("/admin", adminRouter);

app.get("/user/id", (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    res.send("Hello World!");
});

app.get("/uses/", (req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.send("Hello !");
});

app.get("/users", (req, res) => {
    console.log(req.protocol);
    res.send("Hello nirob !");
});

app.post("/users", (req, res) => {
    console.log(req.protocol);
    res.send("Hello yousufs !");
});

app.get("/users/:id", (req, res) => {
    console.log(req.cookies);
    res.send("Hello yousufs !");
});


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000/user/id");
});