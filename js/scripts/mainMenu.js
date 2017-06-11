require([
    'jquery',
    'angular',
], function($, angular){
    "use strict"
    debugger;
    // var template = $('#mainMenutpl').html();
    // var rendered = mustache.render(template, {name: "Luke"});
    // $('#target').html(rendered);
    var moduloApp = angular.module('app',[]);
    (function(app){
	    app.controller('menuCtrl', function($scope){
	    	debugger;
	    	$scope.valor = "marcao";
	    	$scope.abreFaturas = function(){
	    		console.log(" abrindo faturas");
	    	}

		});
    })(moduloApp);
});