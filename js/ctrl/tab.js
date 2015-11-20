define(["../jquery","util/templateUtil","util/dataUtil",'../tab'], function($,_temp,data,tab) {
		var obj = $('#template-container'),
		    template = 'tab',
		    data = {
		    	name: 'ttt'
		    };

		var res = _temp.bind(obj,template,data);

		obj.children('div#mode1').tabs({
			tab_titles:['a_1','b_2','c-3'],
			active_position:2,
			justified:true
		}); 

		obj.children('div#mode2').tabs({
			tab_titles:['d_4','e_5','f_6'],
			active_position:2,
			justified:true
		}); 

		// alert(res.html());
       
    });