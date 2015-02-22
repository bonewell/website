function onChangedCity() {
    var obj = document.getElementById("city");
    var city = obj.value;
    loadStations(city);
}

function loadStations(city) {
    var list = 'stations/' + city + '.html'
    getAXAH(list, 'station');
}

function onChangedStation() {
    var city = document.getElementById('city');
    var station = document.getElementById('station');
    var url = 'stations/' + city.value + '/' + station.value + '.svg';

    var svg = document.getElementById('svg');
    svg.src= url;
}
