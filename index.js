const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
const connect = express()   

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({ extended: true }))

let createConnection = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@sarathy123#",
    database: "fitness"
})
createConnection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("database is connected")
    }
})

connect.post('/register', (request, response) => {
    let { name, email, mobile,  password ,roll} = request.body
    let sql = 'insert into bodyfitness(name,email,mobil_number,password,roll)values(?,?,?,?,?)'
    createConnection.query(sql, [name, email, mobile, password,roll], (error, result) => {
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else {
            response.send({ "status": "success" })
        }
    })
})
connect.post('/tologinpage', (request, response) => {
    let { email, password } = request.body
    console.log(email)
    console.log(password)
    let sql = 'select * from bodyfitness where email=?'
    createConnection.query(sql, [email], (error, result) => {
        if (error) {
            response.send({ "status": "empty_set" })
        }
        else if (result.length > 0) {
            let dbemail = result[0].email
            let dbpassword = result[0].password
            let id = result[0].id
            let roll = result[0].roll
            console.log(dbemail)
            console.log(dbpassword)

            if (dbemail === email && dbpassword === password) {
                response.send({ "status": "success", "id": id ,"roll":roll})
            }
            else {
                response.send({ "status": "error" })
                console.log(error)
            }
        }
    })
})
connect.get('/getsingle/:id', (request, response) => {
    let {id} = request.params
    let sql = 'select * from bodyfitness where id=?'
    createConnection.query(sql,[id],(error,result) => {
        if (error) {
            response.send(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.put('/updatevalues/:id',(request,response)=>{
    let {id}=request.params
    let { name,email,mobil_number } = request.body
    let sql='update bodyfitness set name=?,email=?,mobil_number=? where id=?'
    createConnection.query(sql,[name,email,mobil_number,id],(error,result)=>{
        if (error) {
            response.send({ "status": "error" })
            console.log(error)
        }
        else{
            response.send({"status" : "success"})
        }
    })
})
connect.post('/delete',(request,response)=>{
    let id=request.body.id
    let sql='delete from bodyfitness where id=?'
    createConnection.query(sql,[id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.get('/getdata', (request, response) => {
    let sql = 'select * from bodyfitness'
    createConnection.query(sql, (error, result) => {
        if (error){
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.get('/ownerdashboard/:id', (request, response) => {
    let sql = 'select * from bodyfitness'
    createConnection.query(sql, (error, result) => {
        if (error){
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.listen(3003, () => {
    console.log("your server is running in the port 3003")
})
