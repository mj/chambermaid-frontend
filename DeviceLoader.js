var DeviceLoader = Loader.extend({
    load : function(device) {
        var url = this.baseURL + "/devices/details/" + device;

        $.ajax(url, this.loaderOptions);
    },

    successHandler: function(data, textStatus, jqXHR) {
        if (this.dataHandler) {
            this.dataHandler(data);
        }
    }
});
