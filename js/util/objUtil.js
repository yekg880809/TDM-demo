define(["../jquery","util/templateUtil","util/dataUtil","util/charUtil"], function($,_temp,_data,_char) {
        
        var data = _data.getInitData();
        
        return {
        	create:function(obj){
        		var key = obj.attr('id'),
        		    dataKey = _char.toHumpType(key),
        		    datas = {};
        		    
        		    if (typeof data[dataKey] === 'object') {
						datas = data[dataKey];
        		    };

        		
        		return _temp.bind(obj,datas);
        	}
        };

       
    });