var List = Class.extend({
    init : function() {
        this.items = [];
    },

    add : function(item) {
        this.items.push(item);
    },

    count : function() {
        return this.items.length;
    },

    getAll : function() {
        return this.items;
    }
});
