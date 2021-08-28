
import { useState } from 'react';

const style = {
	form: {
		width: '40vw',
		border: '1px solid',
		display: 'flex',
		padding: '10px'
	},
	label: {
		marginBottom: '5px'
	},
	input: {
		width: '37vw'
	},
	textarea: {
		minHeight: '100px',
		width: '37vw'
	},
	button: {
		marginTop: '10px',
		marginRight: '10px',
	}
}

export default () => {

	const [book, setBook] = useState<Book>()

	return (
		<form style={style.form} >
			<div>
				<label>
					<h4 style={style.label}>Title:</h4>
					<input
						name='title'
						style={style.input}
					/>
				</label>

				<label>
					<h4 style={style.label}>Author:</h4>
					<input
						name='author'
						style={style.input}
					/>
				</label>

				<label>
					<h4 style={style.label}>Description</h4>
					<textarea
						name='description'
						style={style.textarea}
					/>
				</label>

				<div>
					<button style={style.button} type='submit'>Save New</button>
					<button style={style.button} type='submit'>Save</button>
					<button style={style.button} type='submit'>Delete</button>
				</div>

			</div>
		</form>
	)
}
