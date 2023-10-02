const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
app.use(cookieParser());
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// app.use(express.static(__dirname + "/public"));
let count = 0;
app.get("/", (req, res) => {
  res.cookie("Hello", "World");
  res.send("Hi");
});
app.get("/access-cookie", (req, res) => {
  if (count <= 10) {
    count++;
    let keys = Object.keys(req.cookies);
    let keyName = keys[0];
    console.log(keys[0]);
    res.send(
      `You cookie key is ${keyName} and value is ${req.cookies[keyName]}.`
    );
  } else {
    console.log(count);
    res.clearCookie("Hello");
    res.send("Cookie Removed");
  }
});
app.listen(8000);
