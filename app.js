const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:8000')
}

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'I am root Route'
  })
})
