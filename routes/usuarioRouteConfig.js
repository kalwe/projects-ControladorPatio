function usuarioRouteConfig(app) {
	this.app = app;
	this.routeTable = [];
	this.init();
}

usuarioRouteConfig.prototype.init = function () {
	var self = this;
	this.addRoutes();
	this.processRoutes();
}

usuarioRouteConfig.prototype.processRoutes = function () {
	var self = this;
	self.routeTable.forEach( function(route) {
		if (route.requestType == 'get') {

			console.log(route);
			self.app.get(route.requestUrl, route.callbackFunction);

		}
		else if (route.requestTye == 'post') {
			


		}
		else if (route.requestType == 'delete') {
			
		}
	});
}

usuarioRouteConfig.prototype.addRoutes = function () {
	var self = this;
	self.routeTable.push({
		requestType: 'get',
		requestUrl: '/usuario',
		callbackFunction: function(request, responde) {
			response.render('', {title: "Create usuario."});
		}
	});
}

module.exports = usuarioRouteConfig;