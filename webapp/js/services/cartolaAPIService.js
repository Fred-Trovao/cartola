angular.module("cartola").factory("cartolaAPI", function($http, config) {
	
	var _urlMercado = config.baseUrl + "atletas/mercado";
	
	var _getMercado = function() {
		return $http.get(_urlMercado);
	};
		
	return {
		getMercado: _getMercado,
	};
});