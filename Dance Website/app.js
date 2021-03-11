const express = require("express");// Importing node modules 
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/storage', { useNewUrlParser: true, useUnifiedTopology: true });
const path = require("path");// const pug = require("pug");
// mixin text-gen(amount, format, sentence)
const app = express();// Initializing express app 
const hostname = '127.0.0.1';
const port = 80;


const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
        console.log("we're connected!");
});
const docs_template = new mongoose.Schema({
        name: String,
        age: String,
        mobile: String,
        gender: String
});

// var Object = mongoose.model('MyCollections', docs_template);
var User = mongoose.model("User", docs_template);
// const person_1 = new Kitten(data.json);
// person_1.save(function (err, message) {
//         if (err) return console.error(message);
// });
// var bodyParser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "pug");// Setting our view engine to pug 


app.set("views", __dirname + "/views"); // Setting our default views

app.use(express.static(path.join(__dirname + "/static")));

app.get("/", (req, res) => {
        const params = {};
        // console.log("home page running");
        res.status(200).render("home.pug", params);
});
app.get("/about", (req, res) => {
        const params = {}
        // console.log("home page running");
        res.status(200).render("about.pug", params);
});
app.get("/Services", (req, res) => {
        const params = {}
        // console.log("home page running");
        res.status(200).render("Services.pug", params);
});

app.get("/contact", (req, res) => {
        const params = {}
        // console.log("contact page running");
        res.status(200).render("contact.pug", params);
});
// function func(){
//         // alert("good nieght")
//         window.alert("good night");
// }
app.post("/contact", (req, res) => {
        var myData = new User(req.body);
        // func();
        myData.save()
                .then(item => {
                        res.send("item saved to database");
                })
                .catch(err => {
                        res.status(400).send("unable to save to database");
                });
});

// Listening our app on port 3000 
app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
});
