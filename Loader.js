var Loader = Class.extend({
    init : function(inBackground, dataHandler) {
        this.baseURL = "http://chambermaid.home/chambermaid-server/index.php/";
        this.dataHandler = dataHandler;
        this.inBackground = inBackground;

        var loader = this;

        this.loaderOptions = {
            dataType: "jsonp",

            error: function(jqXHR, textStatus, errorThrown) {
                loader.errorHandler(jqXHR, textStatus, errorThrown);
            },
            
            success: function(data, textStatus, jqXHR) {
                loader.successHandler(data, textStatus, jqXHR);
            }
        }
    },

    errorHandler: function(jqXHR, textStatus, errorThrown) {
        console.log("error: ", textStatus);
    },
    
    successHandler: function(data, textStatus, jqXHR) {
        console.log("success: ", data);
    }
});
