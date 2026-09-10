const authors = [
    {id: 1, name: 'Bryan',},
    {id: 2, name: 'Christian',},
    {id: 3, name: 'Jack',},
]

async function getAuthorById(authorId) {
    const result = authors.find(author => author.id == authorId)
    return result
}

module.exports = {getAuthorById};