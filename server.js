const express = require('express')
const app = express()
app.use(express.static('static'))
app.use(express.static('public'))
app.get('/', (req, res, next) => {
    // res.download('payment.pdf')
    // res.send("got get request")
    next()
})

app.listen(3000, (err) => {
    if(err) console.log(err)
    console.log("Server connected")
})