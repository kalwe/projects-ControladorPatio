// require modules
var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
var sessions = require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var conn = require('express-myconnection');
//var fs = require('fs');
//var cookieParser = require('cookie-parser');
//var expressLayouts = require("express-ejs-layouts");
//var layout = require('express-layout');
//var EJSLayout = require('express-ejs-layouts');
//var Usuario = require('js/model/Usuario.js');

var app = express();

var session;
//app.use(EJSLayout);
//app.use(expressLayouts);

// FOR TEST
//fs.readFile 'js/usuario.js', (err, data) ->
//	console.log(data);

// SET PORT FOR REQUESTS
//var port = process.env.PORT || 1337;
var __PORT = 1337;
//app.set('port', process.env.port || 1337);
app.set('/', path.resolve(__dirname));

// funciona
//app.set('layouts', './views');
//app.set('layout', 'index');

//disable layout
app.set('view layout', {layout: false});
app.set('views', __dirname + '/views');
app.set('views/login', __dirname + '/views/login');

// SET ENGINE
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname)));
app.use(express.static(__dirname + '/views'));

app.engine('html', require('ejs').renderFile);
//app.engine('ejs', require('ejs-layout').renderFile);

// DATABASE CONFIG CONNECTION
//var conn = mysql.createConnection({
var dbOptions = {
	host: 'localhost',
	user: 'root',
	//password: '',
	database: 'usuarios',
	multipleStatements: false
};

app.use(conn(mysql, dbOptions, 'single'));

// GET FUNCTIONS
// server http get request/response

app.get('/', function (req, res) {
	res.render('index.html');	
	console.log('GET: 200 index');
});

// GET USUARIO
app.get('/usuario', function (req, res) {
	res.sendFile('js/usuario.js', {
		root: __dirname
	});
	console.log('GET: 200 OK usuario.json');
})

// SELECT
// SELECT
app.get('/api/getUsuario', function(req, res, next) {
	try {
		
		req.getConnection(function (err, conn) {
			if (err) {
				console.error("SQL Connection error: ", err);
				return(next);
			}
			else
			{

				
				var senha = req.param('senha');
				//var selectSql = '';
				conn.query('SELECT * FROM usuarios WHERE senha = ?', senha, function (err, result, rows) {
					if (err) {					
						console.error('SQL error: ', err);
						return next(err);
					}

					var resU = [];

					for (var i in result) {
						var usuario = result[i];
						resU.push(usuario);
					}

					res.json(resU);

				});					
				
			}
		});
	} catch(ex) {
		// statements
		console.error('Internal error: ' + ex);
		return next(ex);
	}
});


// CREATE USURIO
app.post('/api/createUsuario', function(req, res, next) {
    try {

        //var reqUsuario = req.body;

        var usuarioId = req.param('id');
        var usuarioNome = req.param('name');
        var usuarioAtivo = req.param('ativo');
		var usuarioSenha = req.param('senha');

        console.log(usuarioId);

        req.getConnection(function(err, conn) {
           if (err) {
           	console.error('SQL Connection error: ', err);
           	return next(err);
           }
           else
           {
           		var insertSql = 'INSERT INTO usuarios SET ?';
           		
           		var usuarioValues = {
           			//"userName": reqUsuario.userName,
           			//"senha": reqUsuario.senha,
           			//"ativo": reqUsuario.ativo
           			"userName": usuarioNome, 
           			"senha": usuarioSenha,          			
           			"ativo": usuarioAtivo
           		};

           		var query = conn.query(insertSql, usuarioValues, function (err, result) {
           			if (err) {
           				console.error('SQL error: ', err);
           				return next(err);
           			}
           			var usuarioId = result.insertId;
           			res.json({"usuarioId": usuarioId});
           		});
           }
        });
    } catch (ex) {
        // statements
        console.error(ex);
        return next(ex);
    }

});

app.get('/index', function (req, res) {
	res.render('inicial.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/login/login', function (req, res) {
	res.render('login/login.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.post('/login/login', function (req, res) {

	var usuario = new Usuario();

	usuario.userName = req.body.userName;
	usuario.senha = req.body.senha;

	if (true) {
		res.redirect('/home/home.html');
	}	
})

app.get('/*', function (req, res) {
	res.status(404).render('error.ejs', {title: 'Controlador Patio',
		footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});
});

// SERVER FUNCTIONS
var server = app.listen(__PORT, function() {

	var serverHOST = server.address().address;
	var serverPORT = server.address().port;
	
	console.log('\nPath: ' + __dirname);
	console.log('SERVER RUNNING ON PORT: ' + serverPORT);
	console.log('SERVER LISTENING AT http://%s:%s', serverHOST, serverPORT);
})


// apoio para futura funcao
/*
app.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
    , file = req.params.file;

  req.user.mayViewFilesFrom(uid, function(yes){
    if (yes) {
      res.sendFile('/uploads/' + uid + '/' + file);
    } else {
      res.status(403).send("Sorry! You can't see that.");
    }
  });
});
*/