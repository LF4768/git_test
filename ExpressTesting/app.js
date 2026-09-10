const express = require('express')
const path = require("node:path")
const assetsPath = path.join(__dirname, 'public')
const {loadEnvFile} = require('node:process');
const authorRouter = require('./routes/authorRouter');
const booksRouter = require("./routes/books")
const aboutRouter = require('./routes/about')
const app = express();
const links = [
    {href: '', text:"Home"},
    {href: "/about", text: 'About'}
]

const users = ['Rose', 'Cake', 'Biff']

app.use((req,res,next) => {
    res.locals.links = links;
    next();
})

loadEnvFile();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use('/authors',authorRouter)
app.use('/books', booksRouter)
app.use('/about', aboutRouter)
app.use(express.static(assetsPath))


app.get('/', (req,res) => {
    res.render('index', {links: links, users: users})
});

app.get('/:name', (req,res) => {
    const personName = req.params.name
    return res.render('index', {links: links, users: users})
})

app.get('/contact{s}', (req,res) => {
    return res.send('This is supposed to be the contact me page')
});

app.get('/:user/messages', (req,res,next) => { // :user is a parameter that stores all values of this format\
    if(req.params.user == 0){
        return next()
    }
    return res.send({'params' :req.params, 'Query': req.query})
}); 

app.get('/:user/messages', (req,res) => {
    return res.send("Special Msg for Agent 0")
})




app.get('/:user/messages/:messageID', (req,res) => { 
    return res.send(req.params)
});

app.get('/doubleCallback', (req,res,next) => {
    console.log("This function is lazy")
    next();
}, (req,res) => {
    res.send("Check the Logs")
})

// Array Callback Functions

const cb0 = function (req,res,next) {
    console.log('first');
    next();
}

const cb1 = function (req,res,next) {
    console.log('second')
    next();
}

const cb2 = function (req,res,next) {
    res.send("Ending Chain")
}

app.get("/arrayCallback",[cb0,cb1,cb2])

// COMBINATION

app.get('/arrayFuncCombo', [cb0,cb1], (req,res,next) => {
    console.log('function reply')
    next();
}, (req,res) => {
    res.send('Function End')
})

app.get('/yt', (req,res) => {
    res.redirect('https://www.youtube.com/watch?v=CBcqulaaBX0')
})


app.get('/ejs', (req,res) => {
    res.locals.message = "EJS Rocks"
    res.render('index');
})


app.get('/{*splat}', (req,res) => {             // Putting this at the top would prevent all other routes to work
    return res.send('ERROR 404, Page not found')    // Order of the routes matter
});

app.use((err,req,res,next) => {
    console.log(err)
    res.status(err.statusCode ||  500).send(err)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`local server at ${process.env.PORT}`)
})