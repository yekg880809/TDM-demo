define(["../jquery","util/templateUtil","util/dataUtil","util/charUtil"], function($,_temp,_data,_char) {
        
        var data = _data.getInitData();
        
        return {
        	create:function(obj){
        		var key = obj.attr('id'),
        		    dataKey = _char.toHumpType(key),
        		    datas = {};

                if(typeof arguments[1] !== "undefined"){
                    dataKey = _char.toHumpType(arguments[1]);
                    return _temp.bind(obj,data[dataKey]);
                }
        		    
    		    if (typeof data[dataKey] === 'object') {
					datas = data[dataKey];
    		    };

        		// alert(dataKey);
        		return _temp.bind(obj,datas);
        	}
        };

       
    });