function _c (id) {
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { get: id}).done(function(data) {
        $('#title').text(data.title);
    }).fail(function(err) {
        $('#title').text("接続出来ません");
    });
}

$('#send').on('click', function() {
    $('#emsg').text("");
    $('#sendg').hide();
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { send: _getargs().get, content: $('#content').val() }).done(function(data) {
        $('#msg').text("送信しました。");
    }).fail(function(err) {
        $('#emsg').text("うまく送れませんでした。。");
        $('#sendg').show();
    });
});

function _getargs () {
    var arg  = new Object;
    url = location.search.substring(1).split('&');
    for(i=0; url[i]; i++) { var k = url[i].split('='); arg[k[0]] = k[1];}
    return arg;
}

$(function () {
    _c(decodeURIComponent(_getargs().get));
});