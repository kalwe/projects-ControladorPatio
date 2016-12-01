var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'password',
	database: 'usuarios',
	multipleStatements: false
})

connection.connect();

var usuario = {
	userName: 'adm',
	senha: 'adm',
	ativo: true
};

connection.query('INSERT INTO usuarios SET ?', usuario, function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.error(result);
})

connection.query('SELECT * FROM usuarios', function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
})

// website.com/usuarios?id=1; drop table usuarios;
// website.com/usuarios?id='1; drop table usuarios;';
var id = 1

connection.query('SELECT * FROM usuarios WHERE id = ?' + connection.scape(id), function (err, result) {
	if (err) {
		console.error(err);
		return;
	}
	console.log(result);
})