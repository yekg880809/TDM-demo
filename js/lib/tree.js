;(function($){
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

    function _getRoot(node){
        return $('<ul class="root"><span><span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span><span id="rootName">'+node.name+'</span></span></ul>');
    }

    function _getNode(node){
        var temp = '';
        if(typeof arguments[1].collapse !== "undefined"){
            temp = '<li data-link="'+node.id+'"><span><a data-toggle="'+arguments[1].collapse+'" href="#'+arguments[1].ltype+node.id+'"><span class="'+arguments[1].defaults+' '+arguments[1].stat+'" aria-hidden="true"></span></a><a href="'+arguments[1].type+'/'+node.id+'">'+node.name+'</a></span></li>';
        }else{
            // '<li><span><span class="glyphicon glyphicon-file" aria-hidden="true"></span>bbb</span></li>'
            temp = '<li><span><span class="'+arguments[1].defaults+' '+arguments[1].stat+'" aria-hidden="true"></span><a href="'+arguments[1].type+'/'+node.id+'">'+node.name+'</a></span></li>';
        }
        return $(temp);
    }

    function _getList(node){
        return $('<ul id="'+node.type+node.id+'" class="'+node.styles+'"></ul>');
    }

    function Tree(obj){
        this.obj = obj;
    }

    Tree.prototype = {
        constructor:Tree,
        bind:function(resource,type){
            var _obj = this.obj,
                root = resource,
                list = [],
                temp = {},
                styles = {
                    collapse:"collapse",
                    showlist:"in"
                },
                icons = {
                    defaults:"glyphicon",
                    open:"glyphicon-folder-open",
                    close:"glyphicon-folder-close",
                    file:"glyphicon-file"
                };

            if(typeof root.nodes === "object" && root.nodes.length > 0){
                list = root.nodes;
            }
            if(root.pId == "root"){
                temp = _getRoot(root);
                $(_obj).append(temp);
                var t = new Tree(temp);
                t.bind(list,root.childType);
            }else{
                var tmp = $('<ul></ul>');
                    l = $('');
                for(var i = root.length-1;i >= 0; i--){
                    if(typeof root[i].nodes === "object"){
                        temp = _getNode(root[i],{"type":type,"collapse":styles.collapse,"defaults":icons.defaults,"stat":icons.open});
                        var t = new Tree(temp);
                        t.bind(root[i].nodes,root[i].childType);
                    }else{
                        temp = _getNode(root[i],{"type":type,"defaults":icons.defaults,"stat":icons.file});
                    }
                   tmp.append(temp);
                }
                if(!_obj.hasClass('root')){
                    l = _getList({"id":_obj.data('link'),"styles":styles.collapse + " " +styles.showlist});
                    $(l).append(tmp.html());
                    $(_obj).append(l);
                }else{
                    $(_obj).append(tmp.html());
                }
            }
            
            return this;
        },
        setIcons:function(){
            var icons = {
                    opened:'glyphicon-folder-open',
                    closed:'glyphicon-folder-close'
                },
                _obj = this.obj;
            $(_obj).on('click','span span',function(e){
                var t = $(e.target).closest('li').children('ul');
                if(t.hasClass('collapse') && t.hasClass('in')){
                    $(this).removeClass(icons.opened);
                    $(this).addClass(icons.closed);
                }else if(t.hasClass('collapse')){
                    $(this).removeClass(icons.closed);
                    $(this).addClass(icons.opened);
                }
                
            });
            return this;
        },
        forIE:function(){
            var _obj = this.obj;
            $(_obj).find('ul li:last-child').addClass('last-child');
            return this;
        },
        preventLink:function(){
            var _obj = this.obj;
            $(_obj).find('span + a, a + a').on('click',function(e){
                e.preventDefault();
            });
            return this;
        }

    }

    var methods = {
        init: function (options) {
            var defaults = {
                resource:'',
                preventLink:false
                },
                tree = new Tree(this);

            var options = $.extend(defaults, options);
            return this.each(function() { 
                tree.bind(_getResource(options.resource)).setIcons().forIE();
                if(options.preventLink){
                    tree.preventLink();
                }
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
