$(function () {
    $('#login-btn').click(function () {
        $.ajax({
            type: 'POST',
            url: '/login',
            data: {
                username: $('#email').val(),
                password: $('#password').val()
            }
        });
        return false;
    });

});