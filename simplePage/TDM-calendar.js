(function($) {
	function debug($obj) {
		if (window.console && window.console.log) {
			window.console.log($obj);
		}
	};

	function CalendarUtil() {};

	CalendarUtil.prototype = {
		constructor: CalendarUtil,
		getDayCount: function(month, year) {
			var d      = new Date(),
				year   = arguments[1] ? arguments[1] : d.getFullYear(),
				isLeap = (year % 4 === 0 && year % 100 === 0) ? true : false,
				days   = {
					1: 31,
					2: 28,
					3: 31,
					4: 30,
					5: 31,
					6: 30,
					7: 31,
					8: 31,
					9: 30,
					10: 31,
					11: 30,
					12: 31
				}

			if (isLeap && month == 2) {
				return 29;
			};

			return days[month];
		},
		getWeekends: function(year, month) {
			var weekends = [],
				days = this.getDayCount(month, year);

			for (var i = 1; i <= days; i++) {
				var d = new Date(year + '/' + month + '/' + i).getDay()
				if (d == 6 || d == 0) {
					// debug(year+'/'+month+'/'+i);
					weekends.push(i - 1);
				}
			}
			return weekends;
		},
		getFirstDayOfMonth: function(month, isNewYear) {
			var d = new Date();
			var fd = isNewYear ? new Date((d.getFullYear() + 1) + '/' + month + '/1') : new Date(d.getFullYear() + '/' + month + '/1');
			return fd.getDay();

		}
	}

	// function _inherit(superClass,subClass){
	// 	var prototype = new Object(superClass.prototype);
	// 	prototype.constructor = subClass;
	// 	subClass.prototype = prototype;
	// }

	function Equipload(obj) {
		this.obj = obj.find('.equip-load');
		this.init();
	}

	Equipload.prototype = {
		constructor: Equipload,
		init: function() {
			this.calendar        = new CalendarUtil();
			this.firstMonth      = $(this.obj[0]),
			this.secondMonth     = $(this.obj[1]);
			this.firstMonthMark  = $(this.obj[0]).find('caption b').html();
			this.secondMonthMark = $(this.obj[1]).find('caption b').html(this.firstMonthMark.replace(/\d+/g, function(w) {
				return (w == '12') ? 1 : parseInt(w) + 1;
			})).html();
			return this;
		},
		// 重置表头天数
		putDate: function() {
			var f = this.firstMonth,
				s = this.secondMonth,
				fc = this.firstMonthMark,
				sc = this.secondMonthMark,
				cld = this.calendar;

			_resetTitle(f, cld.getDayCount(fc));
			_resetTitle(s, cld.getDayCount(sc));

			return this;
		},
		// 高亮显示周末
		markWeekend: function() {
			var year = new Date().getFullYear(),
				fwed = this.calendar.getWeekends(year, this.firstMonthMark),
				swed = this.calendar.getWeekends(year, this.secondMonthMark);

			if (this.firstMonthMark == 12) {
				swed = this.calendar.getWeekends(year + 1, this.secondMonthMark);
			}

			for (var i = 0; i < fwed.length; i++) {
				this.firstMonth.find('th').eq(fwed[i]).css({
					'background-color': '#2ecc71',
					'color': '#fff'
				});
			}

			for (var i = 0; i < swed.length; i++) {
				this.secondMonth.find('th').eq(swed[i]).css({
					'background-color': '#2ecc71',
					'color': '#fff'
				});
			}

			return this;
		},
		putWeekDate: function() {
			var f = this.firstMonthMark,
				c = this.secondMonthMark,
				ffd = this.calendar.getFirstDayOfMonth(f),
				cfd = (f == 12) ? this.calendar.getFirstDayOfMonth(c, true) : this.calendar.getFirstDayOfMonth(c);

			_fillCalendarOfWeek(this.firstMonth, ffd, this.calendar.getDayCount(f));
			_fillCalendarOfWeek(this.secondMonth, cfd, this.calendar.getDayCount(c));
		}

	}

	function _fillCalendarOfWeek(obj, firstday, dayCounts) {
		var tr = obj.find('tbody tr'),
			start = [0, firstday];

		for (var i = 0; i < dayCounts; i++) {
			var codnt = (function(start, num) {
			     var res = [];
				  res[0] = parseInt(start[1] / 7);
				  res[1] = start[1] % 7;
				start[1] = start[1] + 1;
				return res;
			})(start, i);
			_setDateNum(tr, codnt, (i + 1));
		}
	}

	function _setDateNum(obj, codnt, num) {
		obj.eq(codnt[0])
			.find('td')
			.eq(codnt[1])
			.html(num)
			.css({
				'background-color': '#d9edf7'
			});
	}

	function _resetTitle(obj, days) {
		var tbtle = $(obj).find('thead tr th'),
			tbblk = $(obj).find('tbody tr td'),
			size = tbtle.size(),
			removed = tbtle.size() - days;

		for (var i = 0; i <= removed; i++) {
			tbtle.eq(size - removed + i).html('').css({
				"borderWidth": "0",
				"background-color": "#fff"
			});
			tbblk.eq(size - removed + i).css({
				"borderWidth": "0",
				"background-color": "#fff"
			});
		}
	}

	var methods = {
		equipload: function(options) {
			var items = this;
			for (var i = 0, len = items.size(); i < len; i++) {
				new Equipload($(items[i])).putDate().markWeekend();
			}
			return this.each(function() {


			});
		},
		equipload4week: function() {
			var items = this.has('.equip-load');

			var e4w = new Equipload($(items));
			e4w.putWeekDate();
			return this.each(function() {


			});
		}
	};

	$.fn.TDMCalendar = function() {
		$this = $(this);
		var method = arguments[0];
		if (methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if (typeof(method) == 'object' || !method) {
			method = methods.init;
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.pluginName');
			return this;
		}

		return method.apply(this, arguments);

	}
})(jQuery)