(function($){
	function debug($obj){
		if(window.console && window.console.log){
			window.console.log($obj);
		}
	}

	function RollPlan($obj){
		this.obj = $obj;
		this.init();
	}

	function _addNewEvent(obj){

		$(obj).on('mouseover',function(e){
			$(this).find('div').show();
			$(this).css({'background-color':'rgb(17, 190, 255)','border-color':'rgb(17, 190, 255)'});
		});
		$(obj).on('mouseout',function(e){
			$(this).find('div').hide();
			$(this).css({'background-color':'rgb(17, 161, 253)','border-color':'rgb(17, 161, 253)'});
		});

		$(obj).on('click','.plan-adjust',function(e){
			var fa = $(this).closest('.experiment-item'),
				a  = fa.find('.back-item'), 
				b  = fa.find('.back'),
				f  = fa.find('.adjust-form'),
				l  = fa.find('.adjust-load');
				c  = f.find('.aclose');

			b.show();
			f.show();
		});

		$(obj).closest('.experiment-item').find('.aclose').on('click',function(e){
			$(this).closest('.experiment-item').find('.back-item').hide();
		});
		return obj;
	}

	function _getPlans(obj){
		var bs  = [],
			tr  = $(obj).find('tbody tr:first'),
			tds = tr.children('td').has('span');
		// 	// tds.each(function())
		// debug(tds.size());
	}

	RollPlan.prototype = {
		constructor:RollPlan,
		init:function(){
			var enter = '<div><a class="btn btn-info btn-xs pull-left plan-adjust">计划调整</a></div>',
				bars  = _getPlans(this.obj.find('.rollplan-item-chart'));
			this.tasks = this.obj.find('.task-a').append(enter);
			_addNewEvent(this.tasks);
			return this;
		}
	}

	var Method = {
		init:function(){
			debug($(this));
			var rp = new RollPlan($(this));
			return this.each(function(){

			});
		},
		data:function(){
			debug(this);
			var rp   = new RollPlan($(this)),
				data = {};
			if (arguments.length === 0) {
				return data;
			};


			return this.each(function(){

			});
		}
	}

	$.fn.TDMRollPlan = function(){
		$this = $(this);
		var method = arguments[0];
		if (Method[method]) {
			method = Method[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		}else if(typeof method === 'object' || !method){
			method = Method.init;
		}else{
			$.error('Method ' + method + ' does not exist on jQuery.pluginName');
			return this;
		}

		return method.apply(this,arguments);
	}
})(jQuery)