// requisita o modulo mysql para o nodejs
var mysql = require('mysql');

// define variaveis para a conecxao
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	//password: '',
	database: 'usuarios',
	multipleStatements: false
})

//cria uma conexao
connection.connect();

var id = 1;
var usuario = [
	{
	userName: 'kalwe',
	senha: 'kalwe',
	ativo: true
	};
	{
	userName: 'aline',
	senha: 'aline',
	ativo: true
	}
];

// INSERT
connection.query('INSERT INTO usuarios SET ?', usuario, function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.error(result);
});

// SELECT
/*
connection.query('SELECT * FROM usuarios where id = ?', connection.escape(id), function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
})
*/

// DELETE
/*
connection.query('DELETE FROM usuarios WHERE id = ?', connection.escape(id), function (err, result) {
	if(err) {
		console.error(err);
		return;
	}
	console.log(result);
});
*/


// website.com/usuarios?id=1; drop table usuarios;
// website.com/usuarios?id='1; drop table usuarios;';
//var id = 1

//connection.query('SELECT * FROM usuarios WHERE id = ' + connection.escape(id), //function (err, result) {
//	if (err) {
//		console.error(err);
//		return;
//	}
//	console.log(result);
//};


//

// WEB SERVICE
/*
// INSERT
route.post('/api/createUsuario', function(req, res, next) {
    try {
        var reqUsuario = req.body;
        console.log(reqUsuario);
        req.getConnection(function(err, conn) {
           if (err) {
           	console.error('SQL Connection error: ', err);
           	return next(err);
           }
           else
           {
           		var insertSql = 'INSERT INTO usuario SET ?';
           		var usuarioValues = {
           			"userName": reqUsuario.userName,
           			"senha": reqUsuario.senha,
           			"ativo": reqUsuario.ativo
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
*/
/*
// SELECT
route.get('/api/getUsuario', function(req, res, next) {
	try {
		var usuarioId = req.param('usuarioId');
		var usuarioAtivo = req.param('usuarioAtivo');

		var query = ur.prse(rq.url, true).query;
		console.log(query);

		var usuarioId = query.usuarioId;
		var usuarioAtivo = query.usuarioAtivo;

		console.log(usuarioId);
		console.log(usuarioAtivo);

		req.getConnection(function (err, conn) {
			if (err) {
				console.error("SQL Connection error: ", err);
				return(next);
			}else{

				//var selectSql = '';
				conn.query('SELECT U.userName, U.senha FROM usuarios AS U WHERE U.id = ? AND U.ativo = ?', [usuarioId, usuarioAtivo]);

				if (err) {
					// statement\
					console.error('SQL error: ', err);
					return next(err);
				}

				var resU = [];

				for (var usuarioIndex in rows) {
					var usuarioObj = rows[usuarioIndex];
					resU.push(usuarioObj);
				}
				res.json(resU);
			}
		});
	} catch(ex) {
		// statements
		console.error('Internal error: ' + ex);
		return next(ex);
	}
});
*/
