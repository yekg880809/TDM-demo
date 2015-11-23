define(["../jquery"], function($) {
        
        return {
        	toHumpType:function(chars){
        		if (chars.indexOf('-') < 0){
        			return chars;
        		}

        		chars=chars.replace(/\-\w/g, function(word){
					return word.slice(1).toUpperCase();;}
					);

        		return chars;
        	}
        };

       
    });