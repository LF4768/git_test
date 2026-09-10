const express = require('express')
const app = express();
const path = require('node:path')
const usersRouter = require('./routes/usersRouter')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use('/', usersRouter)




const PORT = 8000
app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`Page loading at: ${PORT}`)
})