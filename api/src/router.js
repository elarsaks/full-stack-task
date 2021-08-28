const Controller = require('./Controller')
  
const express = require('express')
const router = express.Router()

  // Set CORS header to all the requests
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Cache-Control', 'no-store max-age=0')
    next()
  })

  .get('/', function (req, res, next) {
    res.send({
			status: "OK!",
			links: {
				getAllBooks: "http://localhost:3001/getAllBooks"
			}
    })
  })
  
  .delete('/deleteBook', Controller.deleteBook)
  .get('/getAllBooks', Controller.getAllBooks)
  .post('/addBook', Controller.addBook)
  .put('/updateBook', Controller.updateBook)

module.exports = router;
