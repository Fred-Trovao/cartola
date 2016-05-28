angular.module("cartola").filter("clube", function() {
	return function(input, clubes) {
	    return clubes[input].escudos['30x30'];
	};
});