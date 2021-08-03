$('#createb').on('click', function() {
    $('#emsg').text("");
    $('#createg').hide();
    $.getJSON("https://mc3.nakn.jp/api/ytquestion", { create: $('#titlec').val() }).done(function(data) {
        $('#showurl').html(`<a href="https://narikakun.github.io/YTQuestion/index.html?get=${data.showurl}">https://narikakun.github.io/YTQuestion/index.html?get=${data.showurl}</a>`);
        $('#adminurl').html(`<a href="https://narikakun.github.io/YTQuestion/admin.html?get=${data.adminurl}">https://narikakun.github.io/YTQuestion/admin.html?get=${data.adminurl}</a>`);
        $('#liveurl').html(`<a href="https://narikakun.github.io/YTQuestion/show.html?get=${data.adminurl}">https://narikakun.github.io/YTQuestion/show.html?get=${data.adminurl}</a>`);
    }).fail(function(err) {
        $('#emsg').text("うまく作れませんでした。。。");
        $('#createg').show();
    });
});