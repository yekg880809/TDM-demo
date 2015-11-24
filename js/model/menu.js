;(function($) {  
	function debug($obj){
		if(window.console && window.console.log){  
			window.console.log($obj);  
		}  
	};

	function _stopEvents(evt){
        evt.preventDefault();
        evt.stopPropagation();
    }

	function Menu(obj) {
		this.obj = obj;
		var cls1m = obj.find('#class1-menu'),
            cls2m = obj.find('.class2-menu'),
            rtn = obj.find('#rtn-main'),
            asidem = obj.find('.aside-menu'),
            listItem = obj.find('.list-group-item'),
            collapse = obj.find('.class2-menu .collapse');

        asidem.on('click','li',function(e){
            if('menu-title' == $(e.target).closest('li').attr('class')){
              return;
            }
            $(this).closest('.aside-menu').find('li').removeClass('active');
            $(this).addClass('active');
        });

        cls1m.on('click','a',function(e){
            cls2m.collapse('hide');
            cls1m.collapse('hide');
            rtn.collapse('show');
            $('#aside').find('.list-group-item').removeClass('active');
        });

        cls2m.on('click','a',function(e){
            cls2m.find('.collapse').collapse('hide');
        });

        rtn.on('click','a',function(e){
            cls2m.collapse('hide');
            cls1m.collapse('show');
            rtn.collapse('hide');

        });

        collapse.on('click','a',function(e){
            _stopEvents(e);
            listItem.removeClass('active');
            $(this).addClass('active');
        });
	}

	Menu.prototype = {
		constructor:Menu
	} 
 
	var methods = {
        init: function (options) {
            var defaults = {
       
            	},
				options = $.extend(defaults, options),
				menu = new Menu(this);

            return this.each(function() { 

                
            });
        },
        add:function(options){
            return this.each(function() { 
                alert('add');
            });
        }
    };
	
	$.fn.menu = function(options) { 
		// debug(this);  
        $this = $(this);

        var method = arguments[0];
        if(methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if( typeof(method) == 'object' || !method ) {
            method = methods.init;
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
            return this;
        }

        return method.apply(this, arguments);		
	}	
		
})(jQuery);  