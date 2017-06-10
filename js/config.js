require.config({
	paths: {
	    "jquery": "../node_modules/jquery/dist/jquery.min",
	    "angular": "../node_modules/angular/angular",
	    "jq":"scripts/jq",
	    "pService":"scripts/pessoaService",
	    "main":"main"
	},

	shim:{
		angular: {
		    exports: "angular"
		}
	}
});