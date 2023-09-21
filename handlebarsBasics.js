const express = require("express");
const app = express();
const fs = require("node:fs");
// app.set("port", 8000);

// Setting up the templating engine
const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// Serving static content
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  // Serving dynamic content
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is not in the stars to hold our destiny but in ourselves. - William Shakespeare",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "If you can dream it, you can do it. - Walt Disney",
  ];
  let generatedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.render("about", { quote: generatedQuote, variable: "Jayti" });
});

app.listen(8000, () => {
  console.log("Listening at port 8000");
});
