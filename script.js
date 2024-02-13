var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("./Public"));

app.get("/", function (req, res) {
  res.render("index" );
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.listen(3000);
 