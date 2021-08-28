const Controller = require('./Controller')
  
const express = require('express')
const router = express.Router()

  // Set CORS header to all the requests
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Cache-Control', 'no-store max-age=0')
    next()
  })

  .get('/api/info', function (req, res, next) {
    res.send({
      deleteBook: {
        url: "http://localhost:3001/api/deleteBook",
        method: 'DELETE',
        params: {
          id: {
            type: 'INTEGRER',
            required: true
          }
        }
      },
      getAllBooks: {
        url: "http://localhost:3001/api/getAllBooks",
        method: 'GET',
        params: null
      },
      addBook: {
        url: "http://localhost:3001/api/addBook",
        method: 'PUT',
        params: {
          id: {
            type: 'INTEGRER',
            required: true
          },
          title: {
            type: 'STRING',
            required: false
          },
          author: {
            type: 'STRING',
            required: false
          },
          description: {
            type: 'STRING',
            required: false
          },
        }
      },
      updateBook: {
        url: "http://localhost:3001/api/updateBook",
        method: 'UPDATE',
        params: {
          id: {
            type: 'INTEGRER',
            required: true
          }
        }
      }
    })
  })
  
  .delete('/api/deleteBook', Controller.deleteBook)
  .get('/api/getAllBooks', Controller.getAllBooks)
  .post('/api/addBook', Controller.addBook)
  .put('/api/updateBook', Controller.updateBook)

module.exports = router;
