const express = require('express')
const cors = require('cors')

var app = express()
app.use(cors({ origin: '*' }))

app.get('/mail', (req, res) => {

	res.send(["balls"])

})

app.listen(3000)

// get mail
// 