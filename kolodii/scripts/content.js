function load() {
    if (!ssi) {
        loadblock('head');
        loadblock('menu');
        loadblock('foot');
        loadpage();
    }
    loadstyle();
    loadquote();
}

function loadblock(name) {
    loadhtml(name, '#' + name);
}

function loadhtml(page, id) {
    var url = 'html/' + page + '.html';
    $.ajax(url).done(function(data) {
        $(id).html(data);
    }).fail(function() {
        alert('Could not load');
    });
    return false;
}

function show(page) {
    return loadhtml(page, '#main');
}