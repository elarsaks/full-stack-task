
import styled from 'styled-components';
import { useState } from 'react';

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
	selectedBook: Book
}

const Form: React.FC<FormProps> = ({ selectedBook }) => {

	const [book, setBook] = useState<Book>()

	return (
		<FormElement >
			<label>
				<h4 >Title:</h4>
				<Input
					name='title'
				/>
			</label>

			<label>
				<h4 >Author:</h4>
				<Input
					name='author'
				/>
			</label>

			<label>
				<h4 >Description</h4>
				<TextArea
					name='description'
				/>
			</label>

			<div>
				<Button type='submit'>Save New</Button>
				<Button type='submit'>Save</Button>
				<Button type='submit'>Delete</Button>
			</div>
		</FormElement>
	)
}

export default Form;