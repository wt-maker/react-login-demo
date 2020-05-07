const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const lodash = require('lodash')
const port = 3030
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const validatorInput = (data) =>{
    let errors = {}
    if (lodash.isEmpty(data.username)) {
        errors.username='请输入用户名'
    }
    if (lodash.isEmpty(data.email)) {
        errors.email='请输入邮箱'
    }
    if (lodash.isEmpty(data.password)) {
        errors.password='请输入密码'
    }
    if (lodash.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm='请确认密码'
    }
    if (!lodash.isEqual(data.password, data.passwordConfirm)) {
        errors.passwordConfirm='请确认密码是否一致'
    } 
    return{
        errors,
        isValid:lodash.isEmpty(errors)
    }
}

app.post('/addUser', (req, res) => {
    const { errors,isValid } = validatorInput(req.body)
    if(!isValid) {
        res.status(400).json(errors)
    }
})

app.listen(port, ()=>{
    console.log(`Express server is listenning on port ${port}`)
})
