import styled from 'styled-components';
import BookList from './components/BookList'
import Form from './components/Form'

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

function App() {
  return (
    <AppContainer>
      <h1>Full Stack Task</h1>
      <Container>
        <Form />
        <BookList />
      </Container>
    </AppContainer>
  );
}

export default App;
