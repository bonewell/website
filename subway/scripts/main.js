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
    }).fail(function() {
        alert('Sorry, I can not load the image of the station');
    });
}
