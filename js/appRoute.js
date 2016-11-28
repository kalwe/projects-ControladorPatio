var appRoute = angular.module('appRoute', ['ngRoute'])
	.config(['$routeProvide', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider.when('/index', {
				templateUrl: '../views/index.html',
				controller: 'indexControll'
			});
			$routeProvider.otherwise({
				redirectTo: '/index'
			});

			$locationProvider.html5Mode({enabled: true, requireBase: false});
		}])