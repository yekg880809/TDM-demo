require.config({
	baseUrl:'js/lib',
    paths: {
    	// app url
    	app: '../app',

        //controller url
        ctrl:'../ctrl',

    	//config
    	setting:'../setting',

    	// lib files
        jquery: 'jquery-1.9.1.min',
        bootstrap: 'bootstrap.min',
        underscore: 'underscore-min',

        // plugins 
        tree:'tree'
    },
    shim: {

　　　　　　'jquery':{
　　　　　　　　exports: '$'
　　　　　　},

			'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'bootstrap': {
　　　　　　　　deps: ['jquery'],
　　　　　　　　exports: '_b'
　　　　　　},

			'tree': {
				deps: ['jquery','bootstrap']
			}

　　　　}
});
 
require(['app/screen','app/menu','app/tree','app/test']);