$(function () {
    $('#add-btn').click(function () {
        $.ajax({
            type: 'POST',
            url: '/news',
            data: {
                title: $('#title').val(),
                author: $('#author').val(),
                description: $('#description').val(),
                urlToImage: $('#urlToImage').val()
            }
        });
    });
});