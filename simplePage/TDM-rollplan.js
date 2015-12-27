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

	RollPlan.prototype = {
		constructor:RollPlan,
		init:function(){
			this.back = this.obj.closest('.experiment-item').append('<div class="back"></div>');
			this.tasks = this.obj.find('.task-a').append('<div><a class="btn btn-default btn-xs pull-left">计划调整</a></div>');
			this.tasks.on('mouseover',function(e){
				$(this).find('div').show();
			});
			this.tasks.on('mouseout',function(e){
				$(this).find('div').hide();
			});
			return this;
		}
	}

	var Method = {
		init:function(){
			var rp = new RollPlan($(this));
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