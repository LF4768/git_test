const usersStorage = require('../storages/usersStorage')
const {body, validationResult, matchedData} = require('express-validator')
const alphaErr = 'must only contain letters.'
const lengthErr = 'must be between 1 and 10 characters.'

const validateUser = [
    body('firstName')
    .trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({min: 1, max:10}).withMessage(`First name ${lengthErr}`),
    
    body('lastName')
    .trim()
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({min: 1, max:10}).withMessage(`First name ${lengthErr}`)
]

exports.usersListGet = (req,res) => {
    res.render('index', {
        title: 'User List',
        users: usersStorage.getUsers()
    })
}

exports.usersCreateGet = (req,res) => {
    res.render("createUser", {
        title: "Create User"
    })
}

exports.usersCreatePost = [
    validateUser,
    (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(404).render('createUser', {
                title: "Create User",
                errors: errors.array()
            })
        }

        const {firstName, lastName} = matchedData(req)
        usersStorage.addUser({firstName, lastName})
        res.redirect('/')
    }
]

exports.usersUpdateGet = (req,res) => {
    const user = usersStorage.getUser(req.params.id)
    res.render("updateUser", {
        title: "Update user",
        user: user
    })
}


exports.usersUpdatePost = [
    validateUser,
    (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(404).render('createUser', {
                title: "Update User",
                errors: errors.array()
            })
        }

        const {firstName, lastName} = matchedData(req)
        usersStorage.updateUser(req.params.id, {firstName, lastName})
        res.redirect('/')
    }
]


exports.usersDeletePost = (req,res) => {
    usersStorage.deleteUser(req.params.id)
    res.redirect('/')
}