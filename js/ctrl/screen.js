define(["../jquery", "../bootstrap","ctrl/mainMenu"], function($) {
        
    var ctrlBtn = $('#view-resize'),
        ctrlBtnContainer = ctrlBtn.closest('li'),
        curView = null,
        views = {
            tree:$('#tree'),
            ctnt:$('#main'),
            getView:function(view){
                return this[view];
            }
        },ctrls = {
            treeCtrl:ctrlBtnContainer.find('.treeCtrl'),
            ctntCtrl:ctrlBtnContainer.find('.ctntCtrl'),
            resetCtrl:ctrlBtnContainer.find('.resetCtrl')
        },viewSize = {
            reset:[3,7],
            tree:[10,''],
            ctnt:['',10],
            prefix:['col-sm-','col-md-','col-lg-'],
            getTreeSize:function(size){
                return this[size][0]==''?'':(this.prefix[0]+this[size][0]+' '+this.prefix[1]+this[size][0]+' '+this.prefix[2]+this[size][0]).toString();
            },
            getCtntSize:function(size){
                return this[size][1]==''?'':(this.prefix[0]+this[size][1]+' '+this.prefix[1]+this[size][1]+' '+this.prefix[2]+this[size][1]).toString();
            }
        },icons = {
            ichecked:'glyphicon-check',
            unchecked:'glyphicon-unchecked'
        },styles = {
            btnJust:'btn-group-justified',
            bigTree:'big-tree',
            btnGroup:'btn-group'
        }
    

    ctrlBtn.on('click',function(e){
        curView = $(this).data('curView');
    });

    ctrlBtnContainer.on('click','ul a',function(e){
        var _obj = {};                
        if(e.target.tagName == 'A'){
            _obj = $(e.target);
        }else if(e.target.tagName == 'SPAN'){
            _obj = $(e.target).closest('a');
        }

        changeView(_obj,curView);
    });

    function resizeView(ctrl,curView){
        views.getView('tree').removeClass(viewSize.getTreeSize(curView)).addClass(viewSize.getTreeSize(ctrl.data('view')));
        views.getView('ctnt').removeClass(viewSize.getCtntSize(curView)).addClass(viewSize.getCtntSize(ctrl.data('view'))); 
    };

    function changeView(ctrl,curView){
        if(curView == ctrl.data('view')){
            return;
        }else if(viewSize.getTreeSize(ctrl.data('view')) == ''){
            views.getView('ctnt').hide();
            views.getView('tree').show();
            resizeView(ctrl,curView);
            views.getView('tree').removeClass(styles.bigTree);
            views.getView('tree').find('.'+styles.btnGroup).addClass(styles.btnJust);
            views.getView('tree').hide();
            views.getView('ctnt').show();
        }else if(viewSize.getCtntSize(ctrl.data('view')) == ''){
            views.getView('tree').hide();
            views.getView('ctnt').show();
            resizeView(ctrl,curView);
            views.getView('tree').addClass(styles.bigTree);
            views.getView('tree').find('.'+styles.btnGroup).removeClass(styles.btnJust);
            views.getView('tree').show();
            views.getView('ctnt').hide();
        }else{
            views.getView('tree').hide();
            views.getView('ctnt').hide();
            resizeView(ctrl,curView);
            views.getView('tree').removeClass(styles.bigTree);
            views.getView('tree').find('.'+styles.btnGroup).addClass(styles.btnJust);
            views.getView('tree').show();
            views.getView('ctnt').show();
        }

        ctrl.find('span').removeClass(icons.unchecked).addClass(icons.ichecked);
        ctrl.closest('li').siblings().find('span').removeClass(icons.ichecked).addClass(icons.unchecked);
        curView = null;
        ctrlBtn.data('curView',ctrl.data('view'));

        //alert(viewSize.getCtntSize(curView));
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