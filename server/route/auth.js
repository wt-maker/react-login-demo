const express = require('express')
const router = express.Router();
const sqlExcute = require('../mysql')
const lodash = require('lodash')

router.post('/', (req, res) => {

    const { errors,isValid } = validatorInput(req.body)
    console.log(errors);

    if (!isValid) {
        res.status(400).json(errors)
    } else {
        let sql = 'select * from users where mail = ? and password = ?'
        let param = [req.body.email, req.body.password]
        sqlExcute(sql, param, function(data){
            if (!lodash.isEmpty(data)) {
                res.status(200).json({})
            } else {
                let errors = {}
                errors.email = '邮箱密码不正确'
                res.status(400).json(errors)
            }
        })
    }

})

const validatorInput = (data) =>{
    let errors = {}
    if (lodash.isEmpty(data.email)) {
        errors.email='请输入邮箱'
    }
    if (lodash.isEmpty(data.password)) {
        errors.password='请输入密码'
    }
    return{
        errors,
        isValid:lodash.isEmpty(errors)
    }
}

module.exports = router