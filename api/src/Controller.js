const postgres = require('./postgres/repository')

class Controller {

    static addBook(req, res, next) {
        const book = {
            title: req.query.title,
            author: req.query.author,
            description: req.query.description
        }
        postgres.addBook({ ...book })
            .then(() => res.status(200).send('Book added!  \n' + book))
    }

    static deleteBook(req, res, next) {
        const book = {
            id: req.query.id,
        }

        postgres.deleteBook(book.id)
            .then(() => res.status(200).send('Book deleted!'))
    }

    static getAllBooks(req, res, next) {
        postgres.getAllBooks()
            .then((books) => res.status(200).send(books))
    }

    static updateBook(req, res, next) {
        const book = {
            id: req.query.id,
            title: req.query.title,
            author: req.query.author,
            description: req.query.description
        }

        postgres.updateBook({ ...book })
            .then(() => res.status(200).send('Book updated!  \n' + book))
    }
}

module.exports = Controller
