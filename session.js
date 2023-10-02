const express = require("express");
const app = express();
const sessionParser = require("express-session");
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
app.use(sessionParser({ secret: "1" }));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  if (req.session.page_view) {
    req.session.page_view++;
    res.send("You have visited the page " + req.session.page_view + " times.");
  } else {
    req.session.page_view = 1;
    res.send("Welcome to the page!");
  }
});
app.listen(8000);
