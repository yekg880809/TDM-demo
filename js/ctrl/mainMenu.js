define(["../jquery","util/objUtil"], function($,objUtil) {
            
      var ctrl = objUtil.create($('#nav-ctrl')),
          menu = objUtil.create($('#nav-menu'));

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


    
});