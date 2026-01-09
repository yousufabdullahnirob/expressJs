const express = require("express");
const app = express();
const handler = require("./handle");

app.locals.title = "My App";
app.locals.name = "Yusuf";

app.get("/", handler);

app.listen(3004, () => {
    console.log("Server started on port 3004");
});
