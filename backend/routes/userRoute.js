const express = require('express')
const { register, login, getUser } = require('../controllers/userCtrl')
const { requireSignIn } = require('../middleware/userMdwr')

const router = express.Router()

router.post('/register',register)
router.post('/login',login)

router.post('/getUser',requireSignIn,getUser)

module.exports = router