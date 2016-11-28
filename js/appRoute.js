var appRoute = angular.module('appRoute', ['ngRoute'])
	.config(['$routeProvide', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/index', {
				templateUrl: '../views/index.html',
				controller: 'indexControll'
			});
			$routeProvider.otherwise({
				redirectTo: '/index.html'
			});

			$locationProvider.html5Mode({enabled: true, requireBase: false});
		}])