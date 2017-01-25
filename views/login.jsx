var React = require('react');

module.exports = React.createClass({
    displayName: 'Login',

    render: function () {
        return (
           <html>
                <head>
                    <script src="/javascripts/jquery-3.1.1.min.js">
                    </script>
                    <script src="/javascripts/AuthorizationDataSender.js">
                    </script>
                    
                </head>
                <body>
                    <div>

                        <h1>Login</h1>

                        <form id="login-form" name="login-estimation">
                            <div className="input">
                                <span className="label">Email</span>
                                <input id="email" type="text" name="text" />
                            </div>

                            <div className="input">
                                <span className="label">Password</span>
                                <textarea id="password" name="text" cols="40" rows="5"></textarea>
                            </div>
                            <div className="actions">
                                <input id="login-btn" type="button" value="login" />
                            </div>
                        </form>
                    </div>
                </body>
           </html>
        );
    }
});