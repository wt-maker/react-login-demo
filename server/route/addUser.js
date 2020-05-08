const express = require('express')
const router = express.Router();
const lodash = require('lodash')
const sqlExcute = require('../mysql')

router.post('/', (req, res) => {
    const { errors,isValid } = validatorInput(req.body)
    if(!isValid) {
        res.status(400).json(errors)
    } else {
        let sql = 'insert into t_users values(null,?,?,?)'
        let param = [req.body.username, req.body.email, req.body.password]
        sqlExcute(sql, param, function(data){
            if(data.affectedRows){
                res.send('{success:true}')
            } else {
                res.status(400).json({error:'注册失败'})
            }
        })
    }
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

module.exports = router