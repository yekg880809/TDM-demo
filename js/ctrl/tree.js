define(["../jquery","../tree","../setting","util/dataUtil"], function($,t,cfg,data) {

		var res = cfg.getConfig("treeResource");

        $('.tree').TDMTree({
            resource:res,
            preventLink:true
        });


       
    });