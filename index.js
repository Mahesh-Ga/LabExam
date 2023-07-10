const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

app.get('/', (request, response) => {
  response.send('Home page')
})

const empRouter = require('./Routes/emp')
app.use('/emp', empRouter)

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 4000')
})
