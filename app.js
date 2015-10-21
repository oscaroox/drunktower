var express = require('express'),
	app 	= express(),
	morgan	= require('morgan'),
	path	= require('path');

app.set('view engine', 'jade');
app.set('views', path.join( __dirname + '/views'));
app.use(express.static(path.join(__dirname + '/assets')));
app.get('/', function(req, res) {
	res.render('index', {title:'hello'});
});

app.listen(9000);