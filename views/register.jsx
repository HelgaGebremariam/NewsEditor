var React = require('react');

module.exports = React.createClass({
    displayName: 'Register',

    render: function () {
        return (
           <html>
                <head>
                    <script src="/javascripts/jquery-3.1.1.min.js">
                    </script>
                    <script src="/javascripts/AuthorizationDataSender.js">
                    </script>

                </head>
                <body id='body-wrapper'>
                    <div>

                        <h1>Register</h1>

                        <form id="register-form" name="register-estimation">
                            <div className="input">
                                <span className="label">Email</span>
                                <input id="email" type="text" name="text" />
                            </div>

                            <div className="input">
                                <span className="label">Name</span>
                                <input id="name" name="text" type="text" cols="40" rows="5" />
                            </div>

                            <div className="input">
                                <span className="label">Password</span>
                                <input id="password" type="password" name="text" cols="40" rows="5" />
                            </div>

                            <div className="actions">
                                <input id="register-btn" type="button" value="register" />
                            </div>
                        </form>
                    </div>
                </body>
           </html>
        );
    }
});