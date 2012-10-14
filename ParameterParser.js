var ParameterParser = Class.extend({
    getTokens : function() {
        var result = {};
        var query = window.location.search.substring(1);
        var parts = query.split("&");

        for (var key in parts) {
            var tmp = parts[key].split("=");

            if (tmp.length == 2) {
                var k = tmp[0];
                var v = tmp[1];
                
                result[k] = v;
            }
        }

        return result;
    },

    getToken : function(name) {
        var tokens = this.getTokens();
        
        return tokens[name];
    }
});
