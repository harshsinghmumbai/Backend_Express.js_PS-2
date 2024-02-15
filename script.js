var express = require("express");
var app = express();

// ------------Middleware code and Request, Response, Next -----------------------------------
// app.use("/middleware", function (req, res, next) {
//   console.log("hello middleware")
//   next();
//  })

// Static Files code is below------------------------------------------
app.set("view engine", "ejs");
app.use(express.static("./Public"));

app.get("/", function (req, res) {
  res.render("index" );
});

//error routes is here--------------
app.get("/error", function (req, res,next) {
  throw Error("Something went wrong!")
})

app.get("/contact", function (req, res) {
  res.render("contact");
});

//Error Handling code is below----------------
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}
















//--------Dynamic Routing Code example-----------------------------
// app.get("/profile", function (req, res) {
//   res.send("hello form profile")
// })

// app.get("/profile/:username", function (req, res) {
//   res.send(`Hello form ${req.params.username}`)
// })

app.listen(3000);
 