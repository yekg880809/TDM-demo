define(["../jquery", "../underscore","../setting"], function($,_,cfg) {

        var _t = cfg.getConfig('template');
        
        return {
		        	getBase:function(){
		        		return _t.baseUrl;
		        	},
		        	bind:function(obj,type,datas){

		        		var url = this.getBase()+_t[type],
		        			res = "";

		        		_.templateSettings = {
							interpolate: /\{\{(.+?)\}\}/g
						};

		        		$.ajax({ 
				            url: url,
				            type:'get',
				            async:false, 
				            dataType:'text',
				            success: function(result){
				                res = result;
				            }
				        });


		        		obj.html(_.template(res)(datas));
				        arguments[3]();
				        
				        return obj;

		        	}
        }

       
    });