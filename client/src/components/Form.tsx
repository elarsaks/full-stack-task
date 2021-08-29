
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../api/api'

const FormElement = styled.form`
	width: 40vw;
	display: flex;
	flex-direction: column;
	padding: 10px;

	h4 {
		margin-bottom: 3px;
		margin-top: 0px;
	}
`

const Input = styled.input`
	padding: 0.5em;
  border: 1px solid;
  border-radius: 3px;
	width: 90%;
	margin-bottom: 1em;
`

const TextArea = styled.textarea`
	min-height: 100px;
	width: 90%;
	padding: 0.5em;
	border: 1px solid;
  border-radius: 3px;
`

interface ButtonProps {
	backgroundColor: string
	active: boolean
}

const Button = styled.button<ButtonProps>`
	margin-top: 10px;
	margin-right: 10px;
	background-color:${(p) => p.active ? p.backgroundColor : 'gray'};
  border: none;
	border-radius: 0.25em;
  color: white;
  padding: 0.5em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
	cursor: ${(p) => p.active ? 'pointer' : ''};;
`

interface FormProps {
	selectedBook: Book
}

const Form: React.FC<FormProps> = ({ selectedBook }) => {

	const [activeBook, setActiveBook] = useState<Book>({
		id: -9000, // NOTE: this is just a placeholder, real ID will come from SQL
		title: '',
		author: '',
		description: ''
	})

	function fieldsHaveEntry() {
		let author = activeBook.author.length > 0
		let description = activeBook.description.length > 0
		let title = activeBook.title.length > 0

		return author || description || title
	}

	function onInputchange(event: any) {
		setActiveBook({ ...activeBook, [event.target.name]: event.target.value })
	}

	function saveChanges() {
		api.updateBook(activeBook)
	}

	function saveNewBook() {
		if (fieldsHaveEntry()) {
			api.addBook(activeBook)
		}
	}

	function deleteBook() {
		if (!(activeBook.id < 0)) {
			api.deleteBook(activeBook.id)
		}

		setActiveBook({
			id: -9000,
			title: '',
			author: '',
			description: ''
		})
	}

	useEffect(() => setActiveBook(selectedBook), [selectedBook])
	return (
		<FormElement >
			<label>
				<h4 >Title:</h4>
				<Input
					name='title'
					value={activeBook.title}
					onChange={onInputchange}
				/>
			</label>

			<label>
				<h4 >Author:</h4>
				<Input
					name='author'
					value={activeBook.author}
					onChange={onInputchange}
				/>
			</label>

			<label>
				<h4 >Description</h4>
				<TextArea
					name='description'
					value={activeBook.description}
					onChange={onInputchange}
				/>
			</label>

			<div>
				<Button
					active={activeBook.id < 0 && fieldsHaveEntry()}
					backgroundColor='#4CAF50'
					onClick={saveNewBook}>
					Save New
				</Button>

				<Button
					active={!(activeBook.id < 0)}
					backgroundColor='#4CAF50'
					onClick={saveChanges}>
					Save
				</Button>

				<Button
					active={selectedBook.id === activeBook.id || fieldsHaveEntry()}
					backgroundColor='#c21d39'
					onClick={deleteBook}>
					Delete
				</Button>
			</div>
		</FormElement >
	)
};

export default Form;