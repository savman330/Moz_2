// bookinstance.js
const   mongoose = require("mongoose"),
        moment = require("moment"),
        Schema = mongoose.Schema;
        
var BookInstanceSchema = new Schema({
    book: { type: Schema.ObjectId, ref: 'Book', required: true }, // ref to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now },
});

// virtual for BookInstance's URL
BookInstanceSchema
    .virtual('url')
    .get( () => {
        return '/catalog/bookinstance/' + this._id
    });
    
// virtual for BookInstance due_back formatting
BookInstanceSchema
    .virtual('due_back_formatted')
    .get( () => {
        return moment(this.due_back).format('MMMM Do, YYYY');
    });
    
// compile and export
module.exports = mongoose.model('Book Instance',    BookInstanceSchema);