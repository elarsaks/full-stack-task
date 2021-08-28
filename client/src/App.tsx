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
  activeBook: Book
}

interface AppProps {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      books: [],
      activeBook: {
        id: 0, // NOTE: this is just a placeholder, real ID will come from SQL
        title: '',
        author: '',
        description: ''
      }
    }
  }

  selectBook = (book: Book) => {
    this.setState(state => ({ activeBook: book }))
  }

  componentDidMount() {
    api.getAllBooks()
      .then((data: Book[]) => this.setState((state) => ({ books: data })))
  }

  render() {
    return (
      <AppContainer>
        <h1>Full Stack Task</h1>
        <Container>
          <Form
            activeBook={this.state.activeBook}
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
