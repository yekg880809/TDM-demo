define(["jquery","logUtil"], function($,logUtil) {
        
        return {
        	toHumpType:function(chars) {
        		if (chars.indexOf('-') < 0){
        			return chars;
        		}

        		chars = chars.replace(/\-\w/g, function(word){
					return word.slice(1).toUpperCase();
                });

        		return chars;
        	},
            url2Obj:function(url) {
                var result = {};
                url.replace(/\w+\//g, function(word){
                    result.type = word.replace('/','');
                });

                url.replace(/\/\w+/g, function(word){
                    result.id = word.replace('/','');
                });

                logUtil.log(result.type + ":" + result.id);
                return result;
            }
        };

       
    });