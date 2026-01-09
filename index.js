const express = require("express");

const app = express();
const admin = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.route("/")
    .get((req, res) => {
        res.send("Hello World!");
    })
    .post((req, res) => {
        res.send("Hello World!");
    });

app.use('/admin', admin);

app.use(express.json());
app.use (express.raw());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));


app.get('/dashboard', (req, res) => {
    res.send("hello yousuf!");
});

admin.get("/", (req, res) => {
    res.send("Hello World!");
});
admin.on('mount',(parent)=>{
    console.log('Admin mounted');
})
app.get("/about", (req, res) => {
    res.render("about", { name: "Yusuf" });
});

app.all("/", (req, res) => {
    res.send("Hello World!");
});
app.disable("x-powered-by");

app.enable("x-powered-by");
app.set("x-powered-by", true);

app.put("/", (req, res) => {
    res.send("Hello World!");
});
app.delete("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
