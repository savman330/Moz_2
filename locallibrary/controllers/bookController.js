//  bookController .js
const   Book = require("../models/book"),
        Author = require("../models/author"),
        Genre = require("../models/genre"),
        BookInstance = require("../models/bookinstance"),
        async = require("async");

exports.index = (req, res) => {
    
    async.parallel(
        {
        book_count: (callback) => {
            Book.count(callback);
        },
        book_instance_count: (callback) => {
            BookInstance.count(callback);  
        },
        book_instance_available_count: (callback) => {
            BookInstance.count({ status: 'Available' }, callback);
        },
        author_count: (callback) => {
            Author.count(callback);
        },
        genre_count: (callback) => {
            Genre.count(callback);
        },
        }, (err, results) => {
            res.render('index', { title: 'Local Library Home', error: err, data: results });
        });    
};

// Display list of all books.
exports.book_list = (req, res, next) => {
    BookInstance.find()
        .populate('book')
        .exec( (err, list_bookinstances) => {
            if (err) { return next(err); }
            // successful, so render
            res.render('bookinstance_list', { title: 'Local Library Book', bookinstance_list: list_bookinstances });
        });
    
};

// Display detail page for a specific book.
exports.book_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_GET = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_POST = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_GET = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_POST = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_GET = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_POST = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
};
