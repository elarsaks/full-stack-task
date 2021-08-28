const postgres = require('./connection')

function addBook(book) {
	return postgres.db
			.one(`INSERT INTO books (id, author, title, description)
			VALUES($<id>, $<title>, $<author>, $<description>)`,
			{...book})
			.catch(err => console.log(err))
}

function getAllBooks() {
	return postgres.db
			.many(`SELECT * FROM books`)
			.catch(postgres.handleEmptyError)
}

module.exports = {
	addBook,
	getAllBooks
}