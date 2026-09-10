const db = require('../db')
const CustomNotFoundError = require('../errors/customNotFoundError')

async function getAuthorById(req,res) {
    const {authorId} = req.params

    const author = await db.getAuthorById(authorId)

    if(!author) {
        throw new CustomNotFoundError('Author Not Found')
    }
    res.send(`Author Name: ${author.name}`)
}

module.exports = {getAuthorById}