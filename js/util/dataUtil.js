define(["jquery","accessUtil","setting"], function($,accessUtil,cfg) {
        
        
        function _dataInit(){
        	return accessUtil.accessData(cfg.getConfig('initdata'));
        }

        return {
        	getInitData: function(){
        		return _dataInit();
        	},
        	getData: function(){

        	}
        };

       
    });