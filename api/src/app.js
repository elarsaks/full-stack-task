const express = require('express')
const router = require('./router.js')

const PORT = process.env.PORT || 3001
const app = express()
app.use(router)

app.listen(PORT, function () {
  console.log('Api listening on port:', PORT)
})