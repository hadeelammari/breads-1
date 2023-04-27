// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Breads
const breadsController = require('./controllers/breads_controller.js')


// MIDDLEWARE
app.use(express.static('public'))
// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(methodOverride('_method'))
app.use('/breads', breadsController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
})

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})
