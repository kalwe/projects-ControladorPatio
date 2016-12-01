// requisita o modulo mysql para o nodejs
var mysql = require('mysql');

// define variaveis para a conecxao
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'usuarios',
	multipleStatements: false
})

//cria uma conexao
connection.connect();

var usuario = {
	userName: 'test',
	senha: 'test',
	ativo: true
};

var id = 1
// SELECT
connection.query('SELECT * FROM usuarios where id = ?', connection.escape(id), function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
})

// INSERT
connection.query('INSERT INTO usuarios SET ?', usuario, function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.error(result);
})

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