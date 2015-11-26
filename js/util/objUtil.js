define(["jquery","templateUtil","dataUtil","charUtil","logUtil"], function($,templateUtil,dataUtil,charUtil,logUtil) {
        
    var data = dataUtil.getInitData();
    
    return {
    	create:function(obj){
            var obj_block = obj.block,
                temp_id = (typeof obj.tempId !== 'undefined' && obj.tempId !== '')?obj.tempId:obj.block.attr('id'),
                data_id = charUtil.toHumpType((typeof obj.dataId !== 'undefined' && obj.dataId !== '')?obj.dataId:obj.block.attr('id')),
                onlyData = (typeof obj.onlyData !== 'undefined' && obj.onlyData !== '')?obj.onlyData:false,
                datas = {};

            if (!obj.localData) {
                logUtil.log(obj.localData);
                
            };
            // logUtil.log(obj_block.attr('id') + " : " + temp_id + " : " + data_id + " : " + onlyData);

            if (onlyData) {
                logUtil.log("objUtil: "+ data_id +" get only data");
                return data[data_id];
            };

            // if (typeof arguments[1] !== "undefined"){
            //     var isString = typeof arguments[1] === 'string',
            //         isObj = typeof arguments[1] === 'object'
            //     if(isString){
            //         dataKey = charUtil.toHumpType(arguments[1]);
            //         logUtil.log("objUtil: dataType'"+ key +"' bind with data "+ dataKey +"");
            //         return templateUtil.bind(obj,data[dataKey]); 
            //     }else if(isObj){
            //         alert('obj');
            //     }
            // }
    		    
            logUtil.log(data[data_id]);

		    if (typeof data[data_id] === 'object') {
                logUtil.log("objUtil: #"+ temp_id +" bind with data "+ data_id +"");
				datas = data[data_id];
		    };

            // logUtil.log(datas);

    		return templateUtil.bind(obj.block,temp_id,datas);
    	}
    };
});