app.use(app.route);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact'. routes.contact);

var usuarioRouteConfig = require('usuarioRouteConfig.js');

new usuarioRouteConfig(app);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});


/*
*    GET 
*/

export. = function(req, res) {
	res.render('', {title: '', year: new Date().getFullYear() });
};

export.index = function(req, res) {
	res.render('index', {title: 'myTitle', year: new Date().getFullYear() });
};

export. = function(req, res) {
	res.render('', {title: 'about', year: new Date().getFullYear(), message: 'description page'});
};

export. = function(req, res) {
	res.render('', {title: 'contact', year: new Date().getFullYear(), message: 'contact page'});
};