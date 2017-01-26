var React = require('react');

module.exports = React.createClass({
    displayName: 'Article',

    render: function () {
        return (
            <div className={'article'}>
                    <h4>{this.props.data.title}</h4>
                    <p>{this.props.data.author}</p>
                    <p>{this.props.data.description}</p>
                    <img src={this.props.data.urlToImage}/>
            </div>
        );
}
});