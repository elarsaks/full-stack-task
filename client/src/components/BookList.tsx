
import styled from 'styled-components';

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
interface BookListProps {
	books: Book[]
	selectBook: any
}

const BookList: React.FC<BookListProps> = ({ books, selectBook }) => {
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
						<tr key={item.id} onClick={() => selectBook(item)} >
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


export default BookList;