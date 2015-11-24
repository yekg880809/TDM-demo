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
    	setting: 'setting',

    	// lib files
        jquery: 'lib/jquery-1.9.1.min',
        bootstrap: 'lib/bootstrap.min',
        underscore: 'lib/underscore-min',
        mustache: 'lib/mustache.min',

        // model 
        tree: 'model/tree',
        tab: 'model/tabs',
        menu: 'model/menu'
    },
    shim: {

            'bootstrap': {
                deps: ['jquery'],
                exports: '_b'
            },

            'menu': {
                deps: ['jquery','bootstrap']
            },

            'tree': {
            	deps: ['jquery','bootstrap']
            },

            'tab': {
                deps: ['jquery','bootstrap']
            }
　　　　}
});
 
require(['ctrl/mainMenu','ctrl/screen','ctrl/tree','ctrl/tab']);