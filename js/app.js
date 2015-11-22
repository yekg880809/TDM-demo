require.config({
	baseUrl:'js/lib',
    paths: {
    	// ctrl url
    	ctrl: '../ctrl',

        //util url
        util:'../util',

    	//config
    	setting:'../setting',

    	// lib files
        jquery: 'jquery-1.9.1.min',
        bootstrap: 'bootstrap.min',
        underscore: 'underscore-min',

        // plugins 
        tree:'tree',
        tab:'tabs'
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
			},

            'tab': {
                deps: ['jquery','bootstrap']
            },

　　　　}
});
 
require(['ctrl/mainMenu','ctrl/screen','ctrl/menu','ctrl/tree','ctrl/tab']);