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
interface AppState {
  books: Book[]
  selectedBook: Book
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      books: [],
      selectedBook: {
        id: -9999,
        title: '',
        author: '',
        description: ''
      }
    }
  }

  addNewBook(books: Book[]) {
    books.unshift({
      id: -9999,
      title: 'SELECT',
      author: 'THIS',
      description: 'TO ADD NEW BOOK!'
    })
    return books
  }

  selectBook = (book: Book) => {
    this.setState(state => ({ selectedBook: book }))
  }

  componentDidMount() {
    api.getAllBooks()
      .then((data: Book[]) => this.addNewBook(data))
      .then((data: Book[]) => this.setState((state) => ({ books: data })))
  }

  render() {
    return (
      <AppContainer>
        <h1>Full Stack Task</h1>
        <Container>
          <Form
            selectedBook={this.state.selectedBook}
          />

          <BookList
            books={this.state.books}
            selectBook={this.selectBook}
          />
        </Container>
      </AppContainer>
    );
  }
}

export default App;
