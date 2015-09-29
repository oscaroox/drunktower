var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res, next) {
	res.send("test")
});

app.listen(1337)



