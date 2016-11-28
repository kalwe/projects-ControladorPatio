var myApp = angular.module('myApp', []);
		myApp.controller('indexControll', ['$scope', function($scope) {

			$scope.title = "Controlador de Patio";
			$scope.footerText = "© Kalwe - Copyright 2016 Controlador de Patio.";
			$scope.usuario = [
				{userName: "adm", senha: "adm"},
				{userName: "user", senha: "user"}
			];

			$scope.addUsuario = function (usuario) {
				$scope.usuario.push(angular.copy(usuario));
				// deleta o objeto 'usuario' da memoria
				delete $scope.usuario;
				console.log('Usuario adicionado com sucesso.');
			};

		}]);