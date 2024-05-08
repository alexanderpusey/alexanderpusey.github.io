const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

var app = express()
app.use(cors({ origin: '*' }))

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})

connection.connect()

//initalize database
function initialize() {
        connection.query('DROP DATABASE IF EXISTS mail', (err, rows, fields) => {
                console.log('deleted database')
        })
        connection.query('CREATE DATABASE mail', (err, rows, fields) => {
                if (err) throw err
                console.log('created new database')
        })
        connection.query('USE mail', (err, rows, fields) => {
                if (err) throw err
        })
        connection.query('CREATE TABLE Outgoing (sender VARCHAR(50), reciever VARCHAR(50), subject VARCHAR(50), content VARCHAR(50))', (err, rows, fields) => {
                if (err) throw err
                console.log('created outgoing table')
        })
        connection.query('CREATE TABLE Incoming (sender VARCHAR(50), reciever VARCHAR(50), subject VARCHAR(50), content VARCHAR(50))', (err, rows, fields) => {
                if (err) throw err
                console.log('created incoming table')
        })
        //insert default message
        connection.query('INSERT INTO Outgoing(sender, reciever, subject, content) VALUES ("Alex", "Visitor", "Welcome to my website!","Hey Anthony, shoot me a message back!")', (err, rows, fields) => {
                if (err) throw err
                console.log('created default message')

        })
}

initialize()

app.get('/mail', (req, res) => {
        connection.query('SELECT * FROM Outgoing', (err, rows, fields) => {
		if (err) throw err
                res.send(rows)
        })
})

app.get('/sent', (req, res) => {
	connection.query('SELECT * FROM Incoming', (err, rows, fields) => {
		if (err) throw err
		res.send(rows)
	})
})

app.get("/send/:message", (req, res, next) => {

	connection.query(`INSERT INTO Incoming(sender, reciever, subject, content) VALUES ("Visitor", "Alex", "Welcome to my website!","${req.params.message}")`, (err, rows, fields) => {
		if (err) throw err
	})

})

app.listen(3000)