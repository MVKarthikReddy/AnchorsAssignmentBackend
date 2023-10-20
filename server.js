const express = require('express')
const axios = require('axios')
const cors = require('cors');
const {videoController} = require('./controllers/videoController');
const { sendMail } = require('./controllers/sendMail');
const { errorHandler } = require('./middleware/errorHandler');
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(cors())

port = process.env.PORT || 5000

app.post('/',videoController)
app.post('/sendmail',sendMail)

app.use(errorHandler)

app.listen(port,(req,res) => {
    console.log(`app is running on port ${port}`)
})