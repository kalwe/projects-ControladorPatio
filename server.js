// require modules
var express = require('express');
//var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require('ejs');
//var engine = require('ejs-locals');
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

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

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

//app.engine('ejs', engine);

// SET ENGINE
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname)));
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


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
	console.log(req.statusCode);
});

// GET USUARIO JSON
app.get('/usuario', function (req, res) {
	res.sendFile('js/usuario.js', {
		root: __dirname
	});
	console.log('GET: 200 OK usuario.json');
	console.log(req.statusCode);
});

// USUARIO
function usuario(nome, senha,  ativo) {

  self = this;
  self.id = id;
  self.nome = nome;
  self.senha = senha;
  self.dataCriacao = dataCriacao;
  self.ativo = ativo;
  
};

app.get('/api/getUsuarios', function(req, res, next) {
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
				conn.query('SELECT * FROM usuarios ', function (err, result, rows) {
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

				
				var nome = req.param('nome');
				//var selectSql = '';
				conn.query('SELECT * FROM usuarios WHERE userName = ?', nome, function (err, result, rows) {
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


// CREATE USUARIO
app.post('/api/createUsuario', function(req, res, next) {
//app.send('/api/createUsuario', function(req, res, next) {
    
        //var reqUsuario = req.body;
        
        var usuariosJSON = [];

        var usuarios = new Array(usuario);

        for(i in req.body.usuario) {

        	 

        	id = req.body.usuario[i].id;
        	nome = req.body.usuario[i].nome;
        	ativo = req.body.usuario[i].ativo;
			senha = req.body.usuario[i].senha;

        	//var usuario = usuario(id, nome, ativo, senha);

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
                 		"userName": nome,
                 		"senha": senha,
                 		"ativo": ativo
             		};

             		// EXECUTA QUERY SQL
             		var query = conn.query(insertSql, usuarioValues, function(err, result) {
                 		if (err) {
                     		console.error('SQL error: ', err);
                     		return next(err);
                 		}
                 		//
                 		var usuariosJSON = push(usuario);
                 		
                 		//console.log(result);
             		});
         		}
     		});
        	
			//usuarios.push(usuario);
        };

        console.log(req.body.usuario);
        // JSON OUTPUT
        //res.json({ "usuarioId": usuariosJSON.nome });
        //res.render(JSON.stringify(req.body, null, 4));

});

app.get('/index', function (req, res) {
	res.render('inicial.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/login/login', function (req, res) {
	res.render('login/login.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/home/home', function (req, res) {
	res.render('home/home.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.get('/cadastro/cadastro', function (req, res) {
	res.render('cadastro/cadastro.html', {footerText: '© Kalwe - Copyright 2016 Controlador de Patio.'});	
	console.log('GET: 200 index');
});

app.post('/login/login', function (req, res) {

	var usuario = new Usuario();

	usuario.userName = req.body.userName;
	usuario.senha = req.body.senha;

	if (true) {
		res.redirect('/login/login.html');
	}	
});


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

// RESTFULL
/*
switch (req.method) {
	case "post":
		// statements_1
		break;
	case "get":
		// statements_1
		break;
	case "delete":
		// statements_1
		break;
	case "put":
		// statements_1
		break;
	default:
		// statements_def
		break;
}
*/

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