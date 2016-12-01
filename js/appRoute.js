var appRoute = angular.module('appRoute', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			
			$routeProvider.when('/index', {
				templateUrl: '../views/index.html',
				controller: 'indexControll'
			}).when('/login/login', {
				templateUrl: '../views/login/login.html',
				controller: 'loginCtl'
			}).when('/cadastro', {
				templateUrl: '../views/cadastro/cadastro.html',
				controller: 'cadastroControll',
				controllerAs: 'Ctl'
			}).when('/home/home', {
				templateUrl: '../views/home/home.html',
				controller: 'homeControll'
			}).when('/*', {
				templateUrl: '../views/error.ejs'
			}).otherwise({
				redirectTo: '/index.html'
			});

			$locationProvider.html5Mode({enabled: true, requireBase: false});
			// remove o # da url
   			//$locationProvider.html5Mode(true);

		}])