const {Router} = require('express')
const booksRouter = Router();

booksRouter.get('/', (req,res) => res.send("Books Page"))

module.exports = booksRouter;