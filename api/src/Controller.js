const postgres = require('./postgres')

class Controller {
    static getBooks(req, res, next) {
        postgres.getAllBooks()
            .then((books) => res.status(200).send(books))
            .catch(err => console.log(err))
    }

    static addBook(req, res, next) {

        const book = {
            id: req.query.id,
            title: req.query.title,
            author: req.query.author,
            description: req.query.description
        }

        postgres.addBook({ ...book })
            .then(() => res.status(200).send())
    }
}

module.exports = Controller
