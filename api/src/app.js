const express = require('express')
const router = require('./router.js')
const postgres = require('./postgres/repository')

const PORT = process.env.PORT || 3001
const app = express()
app.use(router)

function populateDB() {
  for (let i = 0; i < 50; i++) {
    postgres.addBook({
      author: `Author ${i}`,
      description: `This description of ${i} book! Lorem ipsum dolor sit amet.`,
      id: i,
      title: `Book ${i}`,
    })
	}
}

app.listen(PORT, function () {
  console.log('Api listening on port:', PORT)

  if (postgres.getAllBooks.length < 1) {
    populateDB();
  }
})