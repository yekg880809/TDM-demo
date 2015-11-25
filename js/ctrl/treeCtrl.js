define(["jquery","tree","objUtil"], function($,_tree,objUtil) {

		// var res = cfg.getConfig("treeResource");

		var data = objUtil.create($('.tree'));

        $('.tree').tree({
        	datas:data,
            // resource:data,
            preventLink:true
        });


       
    });