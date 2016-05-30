app.factory('sessionstorage', ['$window', function($window) {
	  return {
	    set: function(key, value) {
	      $window.sessionStorage[key] = value;
	    },
	    get: function(key, defaultValue) {
	      return $window.sessionStorage[key] || defaultValue;
	    },
	    setObjeto: function(key, value) {
	      $window.sessionStorage[key] = JSON.stringify(value);
	    },
	    getObjeto: function(key) {
	      return JSON.parse($window.sessionStorage[key] || '{}');
	    },
	    remover: function(key) {
		  $window.sessionStorage.removeItem(key);
		},
	    clear: function() {
	    	$window.sessionStorage.clear();
	    }
	  }
}]);

//Contantes
var MERCADO = 'mercado';


//Fim constantes