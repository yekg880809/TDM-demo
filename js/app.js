require.config({
	baseUrl:'js/lib',
    paths: {
    	app: '../app',
        jquery: 'jquery-1.9.1.min',
        bootstrap: 'bootstrap.min',
        underscore: 'underscore-min',
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
 
require(['app/screen','app/menu','app/tree']);