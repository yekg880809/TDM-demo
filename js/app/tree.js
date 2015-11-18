define(["../jquery", "../bootstrap","../tree"], function($) {
        $('.tree').TDMTree({
            // 数据源
            resource:'treeData.json'
        });
       
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