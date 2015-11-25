define(["jquery","templateUtil","dataUtil","charUtil"], function($,_temp,_data,_char) {
        
        var data = _data.getInitData();

        function debug($obj){
            if(window.console && window.console.log){  
                window.console.log($obj);  
            }  
        }; 
        
        return {
        	create:function(obj){
                var _id = obj.attr('id'),
                    _data = obj.data('type'),
                    key = typeof _id == 'undefined'?_data:_id,
                    dataKey = _char.toHumpType(key),
        		    datas = {};


                if (obj.data('onlyData')) {
                    debug("objUtil: "+ key +" get only data");
                    return data[dataKey];
                };

                if (typeof arguments[1] !== "undefined"){
                    dataKey = _char.toHumpType(arguments[1]);
                    debug("objUtil: dataType'"+ key +"' bind with data "+ dataKey +"");
                    return _temp.bind(obj,data[dataKey]);
                }
        		    
    		    if (typeof data[dataKey] === 'object') {
                    debug("objUtil: #"+ key +" bind with data "+ dataKey +"");
					datas = data[dataKey];
    		    };

        		return _temp.bind(obj,datas);
        	}
        };

       
    });