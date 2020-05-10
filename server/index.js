const express = require('express')
const bodyParser = require('body-parser')
const addUser = require('./route/addUser')
const checkUserExist = require('./route/checkUserExist')
const auth = require('./route/auth')
const port = 3030
const app = express()

app.use(bodyParser.json())
app.use('/addUser', addUser)
app.use('/checkUser', checkUserExist)
app.use('/login', auth)

app.listen(port, ()=>{
    console.log(`Express server is listenning on port ${port}`)
})
