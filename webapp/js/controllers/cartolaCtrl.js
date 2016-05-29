angular.module("cartola", ['ui.bootstrap']).controller("cartolaCtrl", function($scope, cartolaAPI, sessionstorage, util) {
    $scope.app = "Lista Telefônica";

    var _mercado = {};
    
    $scope.exibirScoutsDefesa = true;
    $scope.exibirScoutsAtaque = true;
    $scope.exibirScoutsNegativos = true;
    $scope.exibirScoutsPositivos = true;
        
    $scope.currentPage = 1; // keeps track of the current page
    $scope.pageSize = 10; // holds the number of items per page
 
    function isEmpty(obj) {

	// null and undefined are "empty"
	if (obj == null)
	    return true;

	// Assume if it has a length property with a non-zero value
	// that that property is correct.
	if (obj.length > 0)
	    return false;
	if (obj.length === 0)
	    return true;

	// Otherwise, does it have any properties of its own?
	// Note that this doesn't handle
	// toString and valueOf enumeration bugs in IE < 9
	for ( var key in obj) {
	    if (hasOwnProperty.call(obj, key))
		return false;
	}

	return true;
    }

    var carregarMercado = function() {
	_mercado = sessionstorage.getObjeto(MERCADO);

	if (isEmpty(_mercado)) {
	    cartolaAPI.getMercado().success(function(data) {

		sessionstorage.setObjeto(MERCADO, data);

		_mercado = data;

		$scope.atletas = _mercado.atletas;
		$scope.clubes = _mercado.clubes;
		$scope.posicoes = _mercado.posicoes;
		$scope.status = _mercado.status;

	    }).error(function(data, status) {
		$scope.error = "Não foi possivel carregar o mercado.";
	    });
	} else {
	    $scope.atletas = _mercado.atletas;
	    $scope.clubes = _mercado.clubes;
	    $scope.posicoes = _mercado.posicoes;
	    $scope.status = _mercado.status;
	}
    };

    $scope.ordenarPor = function(campo) {
	$scope.criterioDeOrdenacao = function(atleta) {
	    
	    var valor = util.getObjectByPath(atleta, campo);
	    
	    return valor || 0;
	};
	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarMercado();
}).filter('start', function () {
    return function (input, start) {
        if (!input || !input.length) { return; }

        start = +start;
        return input.slice(start);
    };
});