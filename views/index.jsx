var React = require('react');

module.exports = React.createClass({
    displayName: 'Index',

    render: function () {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css" />
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                </body>
            </html>
        );
    }
});