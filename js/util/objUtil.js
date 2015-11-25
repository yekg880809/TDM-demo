define(["jquery","templateUtil","dataUtil","charUtil","logUtil"], function($,templateUtil,dataUtil,charUtil,logUtil) {
        
        var data = dataUtil.getInitData();
        
        return {
        	create:function(obj){
                var _id = obj.attr('id'),
                    _data = obj.data('type'),
                    key = typeof _id == 'undefined'?_data:_id,
                    dataKey = charUtil.toHumpType(key),
        		    datas = {};


                if (obj.data('onlyData')) {
                    logUtil.log("objUtil: "+ key +" get only data");
                    return data[dataKey];
                };

                if (typeof arguments[1] !== "undefined"){
                    var isString = typeof arguments[1] === 'string',
                        isObj = typeof arguments[1] === 'object'
                    if(isString){
                        dataKey = charUtil.toHumpType(arguments[1]);
                        logUtil.log("objUtil: dataType'"+ key +"' bind with data "+ dataKey +"");
                        return templateUtil.bind(obj,data[dataKey]); 
                    }else if(isObj){
                        alert('obj');
                    }
                }
        		    
    		    if (typeof data[dataKey] === 'object') {
                    logUtil.log("objUtil: #"+ key +" bind with data "+ dataKey +"");
					datas = data[dataKey];
    		    };

        		return templateUtil.bind(obj,datas);
        	}
        };

       
    });