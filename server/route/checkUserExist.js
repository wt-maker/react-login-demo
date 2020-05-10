const express = require('express')
const router = express.Router();
const sqlExcute = require('../mysql')

router.get('/',(req, res) => {

    let sql = 'select * from users where username = ?'
    let param = [req.query.username]
    
    sqlExcute(sql, param, function(data){
        if (data) {
            res.send(data)
        } else {
            res.send({})
        }
    })
})

module.exports = router