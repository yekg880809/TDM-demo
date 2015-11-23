define(["../jquery","util/accessUtil","setting"], function($,acs,cfg) {
        
        
        function _dataInit(){
        	return acs.accessData(cfg.getConfig('initdata'));
        }

        return {
        	getInitData:function(){
        		return _dataInit();
        	}
        };

       
    });