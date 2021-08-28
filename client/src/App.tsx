import BookList from './components/BookList'
import Form from './components/Form'

const style = {
  app: {

  },

  contentContainer: {
    width: '80vw',
    border: 'solid 1px blue',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10vh',
  },
}

function App() {
  return (
    <div className="App">
      <div style={style.contentContainer}>
        <Form />
        <BookList />
      </div>
    </div>
  );
}

export default App;
