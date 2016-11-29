var appRoute = angular.module('appRoute', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			
			$routeProvider.when('/index', {
				templateUrl: '../views/index.html',
				controller: 'indexControll'
			}).when('/login', {
				templateUrl: '../views/login.ejs',
				controller: 'loginCtl'
			}).when('/cadastro', {
				templateUrl: '../views/cadastro/cadastro.html',
				controller: 'cadastroController'
			}).when('/*', {
				templateUrl: '../views/error.ejs'
			});
			$routeProvider.otherwise({
				redirectTo: '/index.html'
			});

			//$locationProvider.html5Mode({enabled: true, requireBase: false});

		}])

