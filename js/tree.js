// $(function () {
//     $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
//     $('.tree li.parent_li > span').on('click', function (e) {
//         var children = $(this).parent('li.parent_li').find(' > ul > li');
//         if (children.is(":visible")) {
//             children.hide('fast');
//             $(this).attr('title', 'Expand this branch').find(' > a > i').addClass('icon-plus').removeClass('icon-minus');
//         } else {
//             children.show('fast');
//             $(this).attr('title', 'Collapse this branch').find(' > a > i').addClass('icon-minus').removeClass('icon-plus');
//         }
//         e.stopPropagation();
//     });
// });

(function($){
    function debug($obj){
        if(window.console && window.console.log){  
            window.console.log($obj);  
        }  
    };

    function _getResource(resource){
        var data;
        $.ajax({ 
            url: resource,
            type:'get',
            async:false,
            contentType: "application/json", 
            dataType:'json',
            success: function(result){
                data = result;
            }
        });
        return data;
    }; 

    function _getRoot(name){
        return $('<ul><span><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span><span id="rootName">'+name+'</span></span></ul>');
    }

    function _getNode(name){
        return $('<li><span><a data-toggle="" href=""><span class="" aria-hidden="true"></span></a><a href="">'+name+'</a></span></li>');
    }

    function _getList(){
        return $('<ul id = "" class=""></ul>');
    }

    function _bind(temple,resource){
        console.log(_getRoot(resource.name).html());
    }

    var root = _getRoot();

    var methods = {
        init: function (options) {
            var defaults = {
                resource:''
            };
            var options = $.extend(defaults, options);
            return this.each(function() { 
                console.log(_getResource(options.resource));
                return _bind(root,_getResource(options.resource));
            });
        },
        add:function(options){
            return this.each(function() { 
                alert('add');
            });
        }
    };

    $.fn.TDMTree = function(){
        debug(this);  
        $this = $(this);
        var method = arguments[0];
        if(methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if( typeof(method) == 'object' || !method ) {
            method = methods.init;
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
            return this;
        }
        return method.apply(this, arguments);
        
    };

})(jQuery);
