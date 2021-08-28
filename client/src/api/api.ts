const axios = require('axios')

const addBook = (id: number) => {
	return axios({
		url: `http://localhost:3001/api/addBook`,
		method: 'POST',
		params: id,
	}).then((resp: any) => resp)
}

const deleteBook = (id: number) => {
	return axios({
		url: `http://localhost:3001/api/deleteBook`,
		method: 'DELETE',
		params: id,
	}).then((resp: any) => resp)
}

const getAllBooks = () => {
	return axios({
		url: `http://localhost:3001/api/getAllBooks`,
		method: 'GET'
	}).then((resp: any) => resp.data)
}

const updateBook = (book: Book) => {
	return axios({
		url: `http://localhost:3001/api/updateBook`,
		method: 'PUT',
		params: book,
	}).then((resp: any) => resp)
}

export default {
	addBook,
	deleteBook,
	getAllBooks,
	updateBook
}