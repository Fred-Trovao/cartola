app.filter("posicao", function() {
	return function(input, posicoes) {
	    return posicoes[input].abreviacao;
	};
});