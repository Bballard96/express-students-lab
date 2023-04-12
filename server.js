// import modules

import express from 'express'
// import modules

// import the todo data
import { students } from './data/student-data.js'
// we could also do:
// but not both! (well, you can, but please don't)
// create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes

app.get('/', function(req, res) {
  res.send('<h1>Hello, friend</h1>')
})

// app.get('/home', function(req, res) {
//   res.render('home')
// })

app.get('/students', function(req, res) {
  console.log(students)
  res.render('students/index', {
    students: students
  })
})


app.get('/', function(req, res) {
  res.redirect('/home')
})
// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})