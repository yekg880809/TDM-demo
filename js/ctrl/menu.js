define(["../jquery", "../bootstrap","ctrl/mainMenu"], function($) {
        
        var cls1m = $('#class1-menu'),
            cls2m = $('.class2-menu'),
            rtn = $('#rtn-main'),
            asidem = $('.aside-menu'),
            listItem = $('.list-group-item'),
            collapse = $('.class2-menu .collapse');

        asidem.on('click','li',function(e){
            if('menu-title' == $(e.target).closest('li').attr('class')){
              return;
            }
            $(this).closest('.aside-menu').find('li').removeClass('active');
            $(this).addClass('active');
        });

        cls1m.on('click','a',function(e){
            cls2m.collapse('hide');
            cls1m.collapse('hide');
            rtn.collapse('show');
            $('#aside').find('.list-group-item').removeClass('active');
        });

        cls2m.on('click','a',function(e){
            cls2m.find('.collapse').collapse('hide');
        });

        rtn.on('click','a',function(e){
            cls2m.collapse('hide');
            cls1m.collapse('show');
            rtn.collapse('hide');

        });

        collapse.on('click','a',function(e){
            stopEvents(e);
            listItem.removeClass('active');
            $(this).addClass('active');
        });

        function stopEvents(evt){
            evt.preventDefault();
            evt.stopPropagation();
        }
       /* return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }*/
    }
);