define(["../jquery", "../underscore","../setting","util/accessUtil"], function($,_,cfg,acs) {

        var _t = cfg.getConfig('template');

        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };

        function _getTemplate(url) {
            return acs.initTemplate(url);
        }
        
        return {
        	getBase:function(){
        		return _t.baseUrl;
        	},
        	bind:function(obj,type,datas){

        		var url = this.getBase()+type;

				var temp = _getTemplate(url);
        		
        		obj.html(_.template(temp)(datas));
		        
                if (typeof arguments[3] === 'function') {
                    arguments[3]();
                };

		        return obj;

        	},
            bindById:function(obj,type,datas){

                var url = this.getBase()+type;

                var temp = $(_getTemplate(url)).find('#'+$(obj).attr('id')).html();

                obj.html(_.template(temp)(datas));

                if (typeof arguments[3] === 'function') {
                    arguments[3]();
                };

                return obj;

            }
        }

       
    });