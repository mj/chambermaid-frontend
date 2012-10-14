var TemperatureSetter = Loader.extend({
    set : function(device, temperature) {
        var url = this.baseURL + "/set/temperature/for/" + device + "/to/" + temperature;

        $.ajax(url, this.loaderOptions);
    },

    successHandler: function(data, textStatus, jqXHR) {
        alert("OK");
    }
});
