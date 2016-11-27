//require modules
var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// set port for web server
// var port = process.env.PORT || 1337;
var __PORT = 1337;

//require('ejs');

//disable layout
app.set('view layout', {layout: false});
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.set('/', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname)));

app.engine('html', require('ejs').renderFile);

app.set('port', process.env.PORT || 1337)

// server http get request/response
app.get('/', function (req, res) {
	res.render('index.ejs');
	console.log('GET: 200 index');
});

// server functions
var server = app.listen(__PORT, function() {

	var serverHOST = server.address().address;
	var serverPORT = server.address().port;

	console.log('SERVER RUNNING ON PORT: ' + serverPORT);
	console.log('SERVER LISTENING AT http://%s:%s', serverHOST, serverPORT);
})