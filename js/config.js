require.config({
    paths: {
        jquery: "../node_modules/jquery/dist/jquery.min",
        angular: "../node_modules/angular/angular",
        mainMenu: "scripts/mainMenu",
        pService: "scripts/pessoaService",
        axjq: "scripts/axjq",
        main: "main",
        // mustache: "../node_modules/mustache/mustache",
        fatura: "scripts/fatura"
    },
    shim: {
        angular: {
            exports: "angular"
        }/*,
        mustache: {
            exports: "mustache"
        }*/
    }
});