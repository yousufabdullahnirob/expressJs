const express = require("express");

const app = express();
app.use(express.json());

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


app.listen(3000, () => {
    console.log("Server started on http://localhost:3000/user/id");
});