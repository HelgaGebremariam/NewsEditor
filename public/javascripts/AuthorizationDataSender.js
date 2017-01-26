$(function () {
    $('#login-btn').click(function () {
        $.ajax({
            type: 'POST',
            url: '/login',
            data: {
                username: $('#email').val(),
                password: $('#password').val()
            },
            success: function (data) {
                $(data).replaceAll("#body-wrapper");
            }
        });
        return false;
    });

    $('#register-btn').click(function () {
        $.ajax({
            type: 'POST',
            url: '/register',
            data: {
                email: $('#email').val(),
                name: $('#name').val(),
                password: $('#password').val()
            },
            success: function (data) {
                $(data).replaceAll("#body-wrapper");
            }
        });
        return false;
    });

});