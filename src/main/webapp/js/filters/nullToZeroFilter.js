app.filter("nullToZero", function() {
	return function(input) {
	    return input || 0;
	};
});