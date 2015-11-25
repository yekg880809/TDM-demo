define(["jquery", "setting","accessUtil",'mustache','logUtil'], function($,cfg,accessUtil,mustache,logUtil) {

        var _t = cfg.getConfig('template'),
            _temp =  accessUtil.initTemplate(_t.baseUrl);   
        
        return {
            bind:function(obj,datas){

                var temp = $(_temp).find('#'+$(obj).attr('id')).html();
                logUtil.log(temp);
                obj.html(mustache.render(temp,datas));

                if (typeof arguments[3] === 'function') {
                    arguments[3]();
                };

                return obj;

            }
        }

       
    });