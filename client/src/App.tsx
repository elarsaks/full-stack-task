import styled from 'styled-components';
import BookList from './components/BookList'
import Form from './components/Form'

const AppContainer = styled.div`

`

const Container = styled.div`
  width: 80vw;
  border: solid 1px;
  border-radius: 1em;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`

function App() {
  return (
    <AppContainer>
      <Container>
        <Form />
        <BookList />
      </Container>
    </AppContainer>
  );
}

export default App;
