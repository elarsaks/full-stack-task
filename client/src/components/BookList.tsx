
import styled from 'styled-components';
import { useState } from 'react';

const Table = styled.div`
	width: 40vw;
	display: flex;
	flex-direction: column;
	padding: 10px;
	overflow-y: scroll;
	height: 70vh;

	table {
		text-align: left;
		border-collapse: collapse;
	}

	tbody tr {

		&:hover {
			background-color: #50C878;
			cursor: pointer;
		}
	}

	tbody td {
		max-width: 150px;
	}
`

export default () => {

	const [books, setBooks] = useState<Array<Book>>([])

	for (let i = 0; i < 50; i++) {
		let oldBooks = books;
		oldBooks.push(
			{
				author: `Author ${i}`,
				description: `This description of ${i} book! Lorem ipsum dolor sit amet.`,
				id: i,
				title: `Book ${i}`,
			}
		)
	}

	return (
		<Table>
			<table >
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
						<tr key={item.id}>
							<td >{item.title}</td>
							<td >{item.author}</td>
							<td >{item.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Table>
	)
}
