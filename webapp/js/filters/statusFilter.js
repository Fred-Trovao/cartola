angular.module("cartola").filter("status", function() {
	return function(input, status) {
	    return status[input].nome;
	};
});