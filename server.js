//require modules
var express = require('express');
var path = require('path');
var app = express();

// set port for web server
var port = 1337;

//disable layout
app.set('view layout', {layout: false});

app.set('view engine', 'ejs');
app.set('/', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname)));

app.engine('html', require('ejs').renderFile);



// server http get request/response
app.get('/', function (req, res) {
	res.render('index');
	console.log('GET: 200 index');
});

// server functions
var server = app.listen(port, function() {

	var host = server.address().address;
	var portServer = server.address().port;

	console.log('SERVER RUNNING ON PORT: ' + port);
	console.log('SERVER LISTENING AT http://%s:%s', host, portServer);
})