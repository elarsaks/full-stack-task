import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import BookList from './components/BookList'
import Form from './components/Form'
import api from './api/api'


const AppContainer = styled.div`
  text-align: center;
  padding: 2em;
`

const Container = styled.div`
  text-align: left;
  width: 80vw;
  border: solid 1px;
  border-radius: 1em;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  overflow: hidden;
`

export default function App() {
  const [books, setBooks] = useState<Array<Book>>([])

  const [selectedBook, setSelectedBook] = useState<Book>({
    id: books.length + 1,
    title: '',
    author: '',
    description: ''
  })

  function getBooks() {
    api.getAllBooks()
      .then((data: Book[]) => setBooks(data))
  }

  function selectBook(book: Book) {
    console.log(book)
  }

  useEffect(() => getBooks(), [])
  return (
    <AppContainer>
      <h1>Full Stack Task</h1>
      <Container>
        <Form selectedBook={selectedBook} />
        <BookList books={books} selectBook={selectBook} />
      </Container>
    </AppContainer>
  );
}