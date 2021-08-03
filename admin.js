function _c (id) {
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { adminget: id}).done(function(data) {
        if (data.firstid == Number($('#nowid').text())) return;
        $('#nowid').text("");
        $('#nowc').text("");
        $('#title').text(data.title);
        $('#nowid').text(data.firstid);
        $('#nowc').text(data.first?data.first:"何も届いていません");
    }).fail(function(err) {
        $('#nowc').text("接続出来ません");
    });
}

$('#nextdelete').on('click', function() {
    $('#nowc').text("");    
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { adminget: decodeURIComponent(_getargs().get), type: "nextdelete", nowid: $('#nowid').text() }).done(function(data) {
        $('#nowid').text("");
        $('#title').text(data.title);
        $('#nowid').text(data.firstid);
        $('#nowc').text(data.first?data.first:"何も届いていません");
    }).fail(function(err) {
        $('#nowc').text("接続出来ません");
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
    setInterval(() => {
        _c(decodeURIComponent(_getargs().get));
    }, 1000);
});