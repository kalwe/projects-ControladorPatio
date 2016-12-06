var appRoute = angular.module('appRoute', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			
			$routeProvider.when('/footer', {
				templateUrl: '../views/footer.ejs'
			}).when('/login/login', {
				templateUrl: '../views/login/login.html',
				controller: 'loginCtl'
			}).when('/cadastro/cadastro', {
				templateUrl: '../views/cadastro/cadastro.html',
				controller: 'cadastroControll',
				controllerAs: 'cadastroCtl'
			}).when('/home/home', {
				templateUrl: '../views/home/home.html',
				controller: 'homeControll'
			}).when('/*', {
				templateUrl: '../views/error.ejs'
			});

			
			$routeProvider.otherwise({
			}).otherwise({
 				redirectTo: '/index.html'
 			});

			$locationProvider.html5Mode({enabled: true, requireBase: false});
			// remove o # da url
   			//$locationProvider.html5Mode(true);

		}]);

appRoute.controller('appRoute', ['$scope', function ($scope) {
	$scope.title = "Controlador de Patio";
}]);