// genre.js
const   mongoose = require("mongoose"),
        Schema = mongoose.Schema;
    
var GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
});

GenreSchema
    .virtual('url')
    .get( () => {
        return '/catalog/genre/' + this._id;
    });
    
module.exports = mongoose.model('Genre', GenreSchema);