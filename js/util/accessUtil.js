define(["../jquery","setting"], function($) {
        
        return{
        	initConfig:function(){
        		var data ='';
        		$.ajax({ 
		            url: "../config.json",
		            type:'get',
		            async:false,
		            contentType: "application/json", 
		            dataType:'json',
		            success: function(result){
		                data = result;
		            }
		        });
		        return data;
        	},
        	initTemplate:function(url){
        		var data = '';
        		$.ajax({ 
		            url: url,
		            type:'get',
		            async:false, 
		            dataType:'text',
		            success: function(result){
		                data = result;
		            }
		        });
		        return data;
        	},
        	accessData:function(url){
        		var data ='';
        		$.ajax({ 
		            url: url,
		            type:'get',
		            async:false,
		            contentType: "application/json", 
		            dataType:'json',
		            success: function(result){
		                data = result;
		            }
		        });
		        return data;
        	}
        }

       
    });