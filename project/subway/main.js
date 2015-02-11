function onChangedCity() {
    var obj = document.getElementById("city");
    city=obj.value;
    loadStations(city);
}

function loadStations(city) {
    list = 'project/subway/' + city + '.html'
    getAXAH(list, 'station');
}
