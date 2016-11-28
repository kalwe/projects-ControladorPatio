(function () {

	"use strict";
	
	var myApp = angular.module('myApp', ['ngRoute']);

	myApp.config(function('$routeProvider') {
		
		$routeProvider.

		when('/', {
			template: 'index.ejs';
		})
		.when('/index', {
			template: 'index.ejs';
		})
		.otherwise({
			redirectTo: 'index.ejs';
		})

	});

}());


/*
*    shit of CRUD video
*    and need gonna to '~/server.js'
*/

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