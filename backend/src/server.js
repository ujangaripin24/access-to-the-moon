const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res)=>{
    res.send({
        message: `Selamat ${req.body.email} akun ada telah terdaftar!!silahkan login`
    })
})

app.listen(process.env.PORT || 3030)