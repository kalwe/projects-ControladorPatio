angular.module('mainapp', ['eventModule'])
.config([function () {
	console.log('COndigure hook')
}])
.run([function () {
	console.log('Run hook');
}])