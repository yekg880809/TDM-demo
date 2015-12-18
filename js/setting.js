define(["jquery", "accessUtil"], function($, acs) {

	var cfg = acs.initConfig();

	return {
		getConfig: function(type) {
			return cfg[type];
		}
	}
})