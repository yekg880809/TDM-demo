(function($) {  
	function debug($obj){
		if(window.console && window.console.log){  
			window.console.log($obj);  
		}  
	}; 

	function _createTabs(tabs,options) {
		var _nav = $('<nav></nav>'),
			_ul = $('<ul class="nav nav-tabs"></ul>'),
			_titles = options.tab_titles,
			_tab_contents = $(tabs).find('div')
			tmp = $('<div></div>');

		$.each(_titles, function (n, value) {  
			var _li = $('<li role="presentation"><a href="#tab'+ n +'">'+value+'</a></li>');
			var _section = typeof _tab_contents.eq(n) === 'undefined'?'':$('<div class="tab-ctnt" id=tab'+ n +'>'+_tab_contents.eq(n).html()+'</div>');
			
			_ul.append(_li);
			tmp.append(_section);
			_tab_contents.eq(n).remove();
		  });
			
		_nav.append(_ul);
		$(tabs).append(_nav).append(tmp.html());

		return tabs;
	}

	function _setActiveTab(tabs,index) {
		$(tabs).find('li').eq(index-1).addClass('active');
		$(tabs).find('div').hide();
		$(tabs).find('div').eq(index-1).show();
		return tabs;
	}

	function _setEvent(tabs) {
		$(tabs).on('click','li a',function(e){
			e.preventDefault();
			$(tabs).find('li').removeClass('active');
			$(tabs).find('div').hide();
			$(this).closest('li').addClass('active');
			$(tabs).find($(this).attr('href')).show();

		});
		return tabs;
	}

	function Tabs(obj,options) {
		this.obj = _setEvent(_setActiveTab(_createTabs(obj,options),options.active_position));
	}

	Tabs.prototype = {
		constructor:Tabs,
		addJust:function(){
			var _obj = this.obj;
			$(_obj).find('ul').addClass('nav-justified');
			return this;
		}
	}
 
	var methods = {
        init: function (options) {
            var defaults = {
                tab_titles:['a','b','c'],
				active_position:2,
				justified:false
            }

            var options = $.extend(defaults, options);

            return this.each(function() { 
            	var tab = new Tabs(this,options);

            	if(options.justified){
            		tab.addJust();
            	}
                
            });
        },
        add:function(options){
            return this.each(function() { 
                alert('add');
            });
        }
    };
	
	$.fn.tabs = function(options) { 
		debug(this);  
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