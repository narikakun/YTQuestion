$('#createb').on('click', function() {
    $('#emsg').text("");
    $('#createg').hide();
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { create: $('#titlec').val() }).done(function(data) {
        $('#showurl').html(`<a href="file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/index.html?get=${data.showurl}">file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/index.html?get=${data.showurl}</a>`);
        $('#adminurl').html(`<a href="file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/admin.html?get=${data.adminurl}">file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/admin.html?get=${data.adminurl}</a>`);
        $('#liveurl').html(`<a href="file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/show.html?get=${data.adminurl}">file:///J:/yocch/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88/GitHub/YTQuestion/show.html?get=${data.adminurl}</a>`);
    }).fail(function(err) {
        $('#emsg').text("うまく作れませんでした。。。");
        $('#createg').show();
    });
});