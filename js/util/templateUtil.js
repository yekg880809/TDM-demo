define(["../jquery", "../setting","util/accessUtil",'../mustache'], function($,cfg,acs,mustache) {

        var _t = cfg.getConfig('template');

        function _getTemplate(url) {
            return acs.initTemplate(url);
        }
        
        return {
        	getBase:function(){
        		return _t.baseUrl;
        	},
            bind:function(obj,datas){

                var url = this.getBase();

                var temp = $(_getTemplate(url)).find('#'+$(obj).attr('id')).html();

                obj.html(mustache.render(temp,datas));

                if (typeof arguments[3] === 'function') {
                    arguments[3]();
                };

                return obj;

            }
        }

       
    });