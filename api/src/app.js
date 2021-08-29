const express = require('express')
const router = require('./router.js')
const postgres = require('./postgres/repository')

const PORT = process.env.PORT || 3001
const app = express()
app.use(router)

function populateDB() {
  console.log('Populating Database . . .')
  for (let i = 0; i < 25; i++) {
    postgres.addBook({
      author: `Author ${i}`,
      description: `This description of ${i} book! `,
      id: i,
      title: `Book ${i}`,
    })
  }
}

app.listen(PORT, function () {
  console.log('Api listening on port:', PORT)

  postgres.getAllBooks()
    .then(books => {
      if (books.length == 0) {
        populateDB()
      }
    })
})