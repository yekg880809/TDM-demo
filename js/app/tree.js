define(["../jquery","../tree","../setting"], function($,t,cfg) {

		var res = cfg.getConfig("treeResource");

        $('.tree').TDMTree({
            resource:res,
            preventLink:true
        });
       
    });