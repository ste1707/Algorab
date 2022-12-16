const express = require('express')
const app = express()
app.use(express.json())


app.post('/richiesta', function (req, res) {
    const richiesta = req.body
    console.log(richiesta)
})

app.listen(3000)