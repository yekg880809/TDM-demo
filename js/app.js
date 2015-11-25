require.config({
	baseUrl:'js',
    paths: {
    	//config
    	setting: 'setting',

    	// lib files
        jquery: 'lib/jquery-1.9.1.min',
        bootstrap: 'lib/bootstrap.min',
        underscore: 'lib/underscore-min',
        mustache: 'lib/mustache.min',

        // models 
        tree: 'model/tree',
        tab: 'model/tabs',
        menu: 'model/menu',

        // utils 
        accessUtil: 'util/accessUtil',
        charUtil: 'util/charUtil',
        dataUtil: 'util/dataUtil',
        objUtil: 'util/objUtil',
        templateUtil: 'util/templateUtil',

        // ctrls 
        menuCtrl: 'ctrl/menuCtrl',
        screenCtrl: 'ctrl/screenCtrl',
        tabCtrl: 'ctrl/tabCtrl',
        treeCtrl: 'ctrl/treeCtrl'
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
 
require(['menuCtrl','screenCtrl','tabCtrl','treeCtrl']);