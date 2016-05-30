app.filter("status", function() {
	return function(input, status) {
	    return status[input].nome;
	};
});