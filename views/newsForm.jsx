var React = require('react');

module.exports = React.createClass({
    displayName: 'Form',

    render: function () {
        return (
            <html>
                <head>
                    <script src="/javascripts/jquery-3.1.1.min.js">
                    </script>
                    <script src="/javascripts/NewsContentSender.js">
                    </script>
                </head>
                <body>
                    <div>

                        <h1>Articles</h1>

                        <form id="add-form" name="add-estimation">
                            <div className="input">
                                <span className="label">Title</span>
                                <input id="title" type="text" name="title" />
                            </div>

                            <div className="input">
                                <span className="label">Author</span>
                                <textarea id="author" name="text" cols="40" rows="5"></textarea>
                            </div>

                            <div className="input">
                                <span className="label">Description</span>
                                <textarea id="description" name="text" cols="40" rows="5"></textarea>
                            </div>

                            <div className="input">
                                <span className="label">Url to image</span>
                                <textarea id="urlToImage" name="text" cols="40" rows="5"></textarea>
                            </div>

                            <div className="actions">
                                <input id="add-btn" type="button" value="add" />
                            </div>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
});