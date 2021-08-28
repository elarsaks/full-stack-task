
import { useState } from 'react';

const style = {
	tableWrapper: {
		width: '40vw',
		border: '1px solid',
		padding: '10px'
	},
	table: {
		width: '100%',
		textAlign: 'left' as const, // Needs "const assertion" because of TypeScript
	},
	tr: {
		border: '1px solid',
	},
}

export default () => {

	const [books, setBooks] = useState<Array<Book>>([{
		author: 'Author 1',
		description: 'This is a first Book!',
		id: 1,
		title: 'Book 1',
	},
	{
		author: 'Author 2',
		description: 'This is a second Book!',
		id: 2,
		title: 'Book 2',
	}])

	return (
		<div style={style.tableWrapper}>
			<table style={style.table} >
				<thead>
					<tr>
						<th>
							Title
						</th>
						<th>
							Author
						</th>
						<th>
							Description
						</th>
					</tr>
				</thead>
				<tbody>
					{books.map((item: Book) => (
						<tr key={item.id}
							style={style.tr}
						>
							<td >{item.title}</td>
							<td >{item.author}</td>
							<td >{item.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>

	)
}
