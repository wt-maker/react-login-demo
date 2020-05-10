const mysql = require('mysql')

const client = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

function sqlExcute(sql, arr, callback) {
    client.query(sql, arr, function(error, result){
        if (error) {
            console.log(new Error(error))
            return
        }
        callback(result)
    })
}

module.exports = sqlExcute