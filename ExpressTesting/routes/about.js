const {Router} = require('express')
const aboutRouter = Router()

const people = ["Jason","Aaron","Samuel"];

aboutRouter.get('/:name' ,(req,res) => {
    const personName = req.params.name
    res.render('about', {name: personName, yr:3, email: "example@gmail.com", people: people})
})

aboutRouter.get('/', (req,res) => {
    res.render('about', {name: "Guest", yr:3, email: "example@gmail.com", people: people})
})


module.exports = aboutRouter