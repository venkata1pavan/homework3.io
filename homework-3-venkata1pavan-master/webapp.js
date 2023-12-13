//Require express
const express = require ("express");

//app object
const app = express();

//main page
app.get("/", function(req,res) {
	res.send ("Welcome to my first Node.js web site.");
});

//contact page
app.get("/contact", function(req,res) {
	res.send ("My name is Pavan and this is App ");
});

//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port = 8002;
}
app.listen(port);