define(['jquery'], function($){

	var jqMetodos = {

		func1: function(){
			console.log('dentro de jq.js');
			$("#inputid").val("alguma coisa");
		}

	};

	return jqMetodos;

});