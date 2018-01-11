//  catalog .js
const   express = require("express"),
        router = express.Router();
        
// require controller modules
const   book_controller = require("../controllers/bookController"),
        author_controller = require("../controllers/authorController"),
        genre_controller = require("../controllers/genreController"),
        book_instance_controller = require("../controllers/bookinstanceController");
        
/// BOOK ROUTES ///

// GET catalog home page
router.get('/', book_controller.index);

// GET request for creating a book. note: this must come before route that displays book (uses id)
router.get('/book/create/', book_controller.book_create_GET);

// POST request for creating a book 
router.post('/book/create/', book_controller.book_create_POST);

// GET request to delete book
router.get('/book/:id/delete', book_controller.book_delete_GET);

// POST request to delete book
router.get('/book/:id/delete', book_controller.book_delete_POST);

// GET reqeust to update book
router.get('book/:id/delete', book_controller.book_update_GET);

// POST request to update Book.
router.post('/book/:id/update', book_controller.book_update_POST);

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_GET);

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_POST);

// GET request to delete Author.
router.get('/author/:id/delete', author_controller.author_delete_GET);

// POST request to delete Author.
router.post('/author/:id/delete', author_controller.author_delete_POST);

// GET request to update Author.
router.get('/author/:id/update', author_controller.author_update_GET);

// POST request to update Author.
router.post('/author/:id/update', author_controller.author_update_POST);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_GET);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_POST);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_GET);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_POST);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_GET);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_POST);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_GET);

// POST request for creating BookInstance. 
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_POST);

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_GET);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_POST);

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_GET);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_POST);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;

