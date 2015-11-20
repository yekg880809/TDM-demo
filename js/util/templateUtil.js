define(["../jquery", "../underscore","../setting","util/accessUtil"], function($,_,cfg,acs) {

        var _t = cfg.getConfig('template');
        
        return {
        	getBase:function(){
        		return _t.baseUrl;
        	},
        	bind:function(obj,type,datas){

        		var url = this.getBase()+_t[type];

        		_.templateSettings = {
					interpolate: /\{\{(.+?)\}\}/g
				};

				var temp = acs.initTemplate(url);
        		
        		obj.html(_.template(temp)(datas));
		        
                if (typeof arguments[3] === 'function') {
                    arguments[3]();
                };

		        return obj;

        	}
        }

       
    });