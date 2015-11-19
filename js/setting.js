define(["jquery"],function($) {
        var data = '';
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

        return {
            getConfig:function(type){
                return data[type];
            }
        }
    });