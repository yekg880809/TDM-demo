define(["jquery","objUtil","menu"], function($,objUtil) {
            
      var   ctrl = objUtil.create({
                     block:$('#nav-ctrl'),
                     tempId:'',
                     dataId:'',
                     onlyData:false
                  }),
            menu = objUtil.create({
                     block:$('#nav-menu'),
                     tempId:'nav-menu',
                     dataId:'nav-menu',
                     onlyData:false
                  }),
            list = {};

      var   stinM = menu.find('#setting'),
            workM = menu.find('#sys-work-menu');

      ctrl.find('li').eq(0).on('click','a',function(e){
            e.preventDefault();
            stinM.hide();
            workM.show();
            ctrl.find('li').eq(0).hide();
            ctrl.find('li').eq(1).show();
      });

      ctrl.find('li').eq(1).on('click','a',function(e){
            e.preventDefault();
            workM.hide();
            stinM.show();
            ctrl.find('li').eq(1).hide();
            ctrl.find('li').eq(0).show();
      });

      list = objUtil.create({
               block:$('#menu'),
               dataId:'home'
            });
      $(list).menu();

      workM.on('click','a',function(e){
         e.preventDefault();
         var id = $(this).attr('href');
         list = objUtil.create({
                  block:$('#menu'),
                  dataId:id
               });
         $(list).menu();
      });
         

});