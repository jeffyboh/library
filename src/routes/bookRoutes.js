var express = require('express');

var bookRouter = express.Router();

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H G Wells',
        read: false
    },
    {
        title: 'Goodye Emily',
        genre: 'Fiction',
        author: 'Michael Murphy',
        read: false
    },
    {
        title: 'Enders Game',
        genre: 'Science Fiction',
        author: 'Orson Scott Card',
        read: false
    },
    {
        title: 'Dune',
        genre: 'Science Fiction',
        author: 'Frank Herbert',
        read: false
    }
]

var router = function(nav) {
    bookRouter.route('/')
    .get(function(req, res) {
        res.render('bookListView', {
            title: 'Books',
            nav: nav,
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function(req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: nav,
            book: books[id]
        });
    });

    return bookRouter;
}

module.exports = router;
