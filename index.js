//CodedByLuis

const fs =  require("fs");
const express = require("express");
const ws = require("ws");
const http = require("http");
const app = express();
const server = http.createServer(app);
const port = 8000;

app.use(express.json({ strict: true }));

app.get("/", (req, res) => {
    err = null;
    res.sendFile(__dirname + "/frontend/index.php");
    render();
  });
  
  
  app.get("/auth/login", (req, res) => {
      loggedIn = req.cookies.loggedIn;
    if(loggedIn == "true"){
      res.redirect("/");
    } else{
      res.render("/backend/auth/login/index.php");
    }
  })
  
  
  
  app.get("/auth/register", (req, res) => {
    err = null;
    res.sendFile(__dirname + "/backend/auth/register/index.php");
    render();
  });

  server.listen(port);
function render() {
console.log("CreatedByLuis9799")
console.log("Github: https://github.com/LUIS9799")
console.log("#LuisNet https://luisweb.cf")
}