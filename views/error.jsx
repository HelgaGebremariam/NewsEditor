var React = require('react');

module.exports = React.createClass({
    displayName: "Error",

    render: function () {
        return (
            <html>
                <head>
                    <title>Error</title>
                </head>
                <body>
                    <h2>{this.props.error.status}: {this.props.message}</h2>
                </body>
            </html>
            );
    }
});