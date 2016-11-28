angular.module('mainapp', ['eventModule'])
.config([function () {
	console.log('Configure hook')
}])
.run([function () {
	console.log('Run hook');
}])

$scope.app = "Controlador Patio";

			$scope.usuarios = [
				{userName: "adm", senha: "adm"},
				{userName: "user", senha: "user"}
			];

			$scope.addUsuario = function (usuario) {
				$scope.usuario.push(angular.copy(usuario));
				// deleta o objeto 'usuario' da memoria
				delete $scope.usuario;
				console.log('Usuario adicionado com sucesso.')
			};