require.config({
	baseUrl:'js',
    paths: {
        // lib url
        lib: 'lib',

    	// ctrl url
    	ctrl: 'ctrl',

        //util url
        util: 'util',

    	//config
    	setting:'setting',

    	// lib files
        jquery: 'lib/jquery-1.9.1.min',
        bootstrap: 'lib/bootstrap.min',
        underscore: 'lib/underscore-min',
        mustache: 'lib/mustache.min',

        // plugins 
        tree:'lib/tree',
        tab:'lib/tabs'
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