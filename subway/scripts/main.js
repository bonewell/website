function onChangedCity() {
    var obj = document.getElementById("city");
    var city = obj.value;
    loadStations(city);
}

function loadStations(city) {
    var url = 'stations/' + city + '.html';
    $.ajax(url).done(function(data) {
        $('#station').html(data);
    }).fail(function() {
        alert('Sorry, I can not load the list of stations.');
    });
}

function onChangedStation() {
    var city = document.getElementById('city');
    var station = document.getElementById('station');
    var url = 'stations/' + city.value + '/' + station.value + '.svg';
    $.ajax(url, {dataType: 'text'}).done(function(data) {
        $('#box').html(data);
        fit();
    }).fail(function() {
        alert('Sorry, I can not load the image of the station');
    });
}

function fit() {
    var box = {'width': $('#box').width(),
               'height': $('#box').height()};
    var svg = {'width': $('#box > svg').attr("width"),
               'height': $('#box > svg').attr("height")};
    var scale = Math.min((box.width / svg.width), (box.height / svg.height), 1);
    $('#box > svg > g').attr("transform", "scale(" + scale + ")");
}

function doActualSize() {
    $('#box > svg > g').removeAttr("transform");
}
