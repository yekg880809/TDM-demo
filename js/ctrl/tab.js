define(["../jquery","util/objUtil","../tab"], function($,objUtil,tab) {

		var tabs = objUtil.create($('#template-container'));

		tabs.children('div#mode1').tabs({
			tab_titles:['a_1','b_2','c-3'],
			active_position:2,
			justified:true
		}); 

		tabs.children('div#mode2').tabs({
			tab_titles:['d_4','e_5','f_6'],
			active_position:2,
			justified:true
		}); 

       
    });