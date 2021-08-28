
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
	margin-top: 10px;
	margin-right: 10px;
`

interface FormProps {
	activeBook: Book
}

const Form: React.FC<FormProps> = ({ activeBook }) => {

	const [book, setBook] = useState<Book>({
		id: 0, // NOTE: this is just a placeholder, real ID will come from SQL
		title: '',
		author: '',
		description: ''
	})

	function onInputchange(event: any) {
		setBook({ ...book, [event.target.name]: event.target.value })
	}

	useEffect(() => setBook(activeBook), [activeBook])
	return (
		<FormElement >
			<label>
				<h4 >Title:</h4>
				<Input
					name='title'
					value={book.title}
					onChange={onInputchange}
				/>
			</label>

			<label>
				<h4 >Author:</h4>
				<Input
					name='author'
					value={book.author}
					onChange={onInputchange}
				/>
			</label>

			<label>
				<h4 >Description</h4>
				<TextArea
					name='description'
					value={book.description}
					onChange={onInputchange}
				/>
			</label>

			<div>
				<Button >Save New</Button>
				<Button >Save</Button>
				<Button >Delete</Button>
			</div>
		</FormElement >
	)
};

export default Form;