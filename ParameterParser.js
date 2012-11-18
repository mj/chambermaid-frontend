var ParameterParser = Class.extend({
    getToken : function(name) {
        return localStorage.getItem(name);
    }
});
