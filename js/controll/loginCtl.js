var login = angular.module('login', []);
login.controller('loginCtl', ['$scope', function($scope){
	
	$scope.title = "Controlador de Patio";

	$scope.addUsuario = function (usuario) {
				$scope.usuario.push(angular.copy(usuario));
				// deleta o objeto 'usuario' da memoria
				
				if (usuario.userName == '' && usuario.senha == '') {
					alert("Preencha os todos os campos.");
				}
				console.log('Usuario adicionado com sucesso. ' + $scope.usuario.userName);
				delete $scope.usuario;
			};
	
}]);