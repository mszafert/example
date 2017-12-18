var Skicams = function() {};

Skicams.prototype = {
    _div: null,
    _result: [],
    _today: '',
    init: function() {
        this._div = $('#skicams-container');
        this.getData();
        this.getCurrentDate();
    },
    getData: function() {
        $.ajax({
            url: 'https://makevoid-skicams.p.mashape.com/cams.json',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                this.processData(data);
            }.bind(this),
            error: function(err) {
                alert(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw");
            }
        });
    },
    processData: function(data) {
        for(var i in data) {
            this._result[data[i].name] = data[i].cams;
        }
        // debugger;
        this.displayResult();

    },
    getCurrentDate: function() {
        var today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear();

        if (dd < 10) { dd = '0' + dd; }
        if (mm < 10) { mm = '0' + mm; }

        this._today = mm + '-' + dd + '-' + yyyy;
    },
    displayResult: function() {
        var data = [
            'Andalo',
            'Monte Bondone'
        ];
        var html = [];
        for(var i in data) {
            // debugger;
            html.push('<div class="uk-width-medium-1-2">');
            html.push('<div class="uk-panel-box">');
            html.push('<div class="uk-panel-badge">' + this._today + '</div>');
            html.push('<h3 class="uk-text-center uk-h2">');
            html.push(data[i]);
            html.push('</h3>');
            var item = this._result[data[i]];
            for (var j in item) {
                html.push('<img src="');
                html.push(item[j].url);
                html.push('" alt="' + item[j].name + '">');
            }
            html.push('</div>');
            html.push('</div>');
        }
        this._div.append(html.join(''));
    }
};
var test = new Skicams();
test.init();