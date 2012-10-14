var RoomListLoader = Loader.extend({
    load : function() {
        var url = this.baseURL + "/rooms";

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
