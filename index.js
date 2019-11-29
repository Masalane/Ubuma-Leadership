let path = require('path')
let express = require('express')
let app = express()

app.use(require('./dashBoard'))

app.listen(3000)
console.log('Express server running on port 3000')
