
import React from 'react';
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

class Form extends React.Component<FormProps, Book> {

	constructor(props: FormProps) {
		super(props);

		this.state = {
			id: 99999999, // NOTE: this is just a placeholder, real ID will come from SQL
			title: '',
			author: '',
			description: ''
		}

		this.onInputchange = this.onInputchange.bind(this)
	}

	onInputchange = (event: any) => {
		switch (event.target.name) {
			case 'title':
				this.setState((state) => ({ title: event.target.value }))
				break;
			case 'author':
				this.setState((state) => ({ author: event.target.value }))
				break;
			case 'description':
				this.setState((state) => ({ description: event.target.value }))
				break;
			default:
		}
		// TODO: Why it cannot be done like this?
		//this.setState(state => ({ [event.target.name]: event.target.value }))
	}



	render() {
		return (
			<FormElement >
				<label>
					<h4 >Title:</h4>
					<Input
						name='title'
						value={this.state.title}
						onChange={this.onInputchange}
					/>
				</label>

				<label>
					<h4 >Author:</h4>
					<Input
						name='author'
						value={this.state.author}
						onChange={this.onInputchange}
					/>
				</label>

				<label>
					<h4 >Description</h4>
					<TextArea
						name='description'
						onChange={this.onInputchange}
					/>
				</label>

				<div>
					<Button >Save New</Button>
					<Button >Save</Button>
					<Button >Delete</Button>
				</div>
			</FormElement >
		)
	}
};

export default Form;