var DeviceListLoader = Loader.extend({
    load : function(room) {
        var url = this.baseURL + "/devices/in/" + room;

        $.ajax(url, this.loaderOptions);
    },

    successHandler: function(data, textStatus, jqXHR) {
        var list = new List();

        for (var key in data) {
            list.add(data[key]);
        }

        if (this.dataHandler) {
            this.dataHandler(list);
        }
    }
});
