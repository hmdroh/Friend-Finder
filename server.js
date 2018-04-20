var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


var routs = require("./app/routing/htmlRoutes.js")(app,bodyParser);
var apirouts = require("./app/routing/apiRoutes.js")(app, bodyParser); 

app.listen(PORT, function(){

});