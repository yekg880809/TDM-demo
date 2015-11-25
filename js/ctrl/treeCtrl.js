define(["jquery","tree","objUtil","charUtil"], function($,_tree,objUtil,charUtil) {

		var data = objUtil.create($('.tree'));

        $('.tree').tree({
        	datas:data,
            // resource:data,
            preventLink:true
        });

        $('.tree').find('span + a, a + a').on('click',function(){
        	var url = charUtil.url2Obj($(this).attr('href'));

        	var list = objUtil.create($('#work-area'),url)
        });

       
    });