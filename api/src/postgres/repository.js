const postgres = require('./connection')

function addBook(book) {
	return postgres.db
			.one(`INSERT INTO books (author, title, description)
				VALUES( $<title>, $<author>, $<description>)`,
				{...book})
				.catch(postgres.handleEmptyError)
}

function deleteBook(id) {
	return postgres.db
			.one(`DELETE FROM books WHERE id = $<id>`, { id })
			.catch(postgres.handleEmptyError)
}

function getAllBooks() {
	return postgres.db
		.many(`SELECT * FROM books
			ORDER BY id DESC`)
			.catch(postgres.handleEmptyError)
}

function updateBook(book) {
	return postgres.db
		.one(`UPDATE books
			SET title = $<title>,
			author = $<author>,
			description = $<description>
			WHERE id = $<id>`,
			{...book})
		.catch(postgres.handleEmptyError)
}

module.exports = {
	addBook,
	deleteBook,
	getAllBooks,
	updateBook
}