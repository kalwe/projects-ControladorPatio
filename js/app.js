(function () {

	"use strict";
	
	var mypp = angular.module('myApp', ['ngRoute']);

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