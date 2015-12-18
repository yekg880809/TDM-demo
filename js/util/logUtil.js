define(["jquery"], function($) {

	return {
		log: function(obj) {
			if (window.console && window.console.log) {
				window.console.log(obj);
			}
		}
	};


});