// require modules
var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var expressLayouts = require("express-ejs-layouts");
var ejs = require('ejs');
//var layout = require('express-layout');
//var EJSLayout = require('express-ejs-layouts');


var app = express();
//app.use(EJSLayout);
//app.use(expressLayouts);


// set port for web server
//var port = process.env.PORT || 1337;
var __PORT = 1337;

// funciona
//app.set('layouts', './views');
//app.set('layout', 'index');

//disable layout
app.set('view layout', {layout: false});
app.set('views', __dirname + '/views');
app.set('views/login', __dirname + '/views/login');

app.set('view engine', 'ejs');
app.set('/', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname)));
app.use(express.static(__dirname + '/views'));

app.engine('html', require('ejs').renderFile);
//app.engine('ejs', require('ejs-layout').renderFile);


// GET FUNCTIONS
// server http get request/response

app.get('/', function (req, res) {
	res.render('index.html');	
	console.log('GET: 200 index');
});

app.get('/index', function (req, res) {
	res.render('inicial.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/login/login', function (req, res) {
	res.render('/login/login.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/*', function (req, res) {
	res.status(404).render('error.ejs', {title: 'Controlador Patio',
		footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});
});

// SERVER FUNCTIONS
var server = app.listen(__PORT, function() {

	var serverHOST = server.address().address;
	var serverPORT = server.address().port;

	console.log('SERVER RUNNING ON PORT: ' + serverPORT);
	console.log('SERVER LISTENING AT http://%s:%s', serverHOST, serverPORT);
})