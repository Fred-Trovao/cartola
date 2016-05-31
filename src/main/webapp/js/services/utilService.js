app.factory("util", function($http, config) {

    var _getObjectByPath = function(object, path) {
	
	if(!object || !path || !path.length){
	    return object;
	}
	
	var getObject = function(obj, pathArray) {
	    
	    if(!obj){
		return obj;
	    }
	    
	    var campo = pathArray.shift();
	    
	    if(!pathArray.length){
		return obj[campo]; 
	    }
	    
	    return getObject(obj[campo], pathArray);
	};
	
	return getObject(object, path.split("."));
    };
    
    return {
	getObjectByPath : _getObjectByPath,
    };
});