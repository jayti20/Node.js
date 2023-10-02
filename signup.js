const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.get("/", (req, res) => {
  console.log(req.query);
  res.render("form");
});
app.get("/thankyou", (req, res) => {
  console.log("get request", req.query);
  res.render("thankyou", {
    email: req.query.email,
    password: req.query.password,
  });
});
app.post("/thankyou", (req, res) => {
  console.log("post request", req.body);
  res.render("thankyou", {
    email: req.body.email,
    password: req.body.password,
  });
});
app.listen(8000);
