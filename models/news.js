var mongoose = require('mongoose');
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var NewsSchema = new Schema({
	title		: String,
    author      : String,
    description : String,
    urlToImage  : String
});

module.exports = mongoose.model('news', NewsSchema);


