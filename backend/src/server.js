const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config.js')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes.js')(app)

sequelize.sync()
    .then(()=>{
        app.listen(config.port)
        console.log(`Server berjalan pada port ${config.port}`)
})
