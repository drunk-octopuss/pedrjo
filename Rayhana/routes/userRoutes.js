
const  express = require("express")
const router = express.Router()


const userController = require('./controller/userController')


router.get('/' , userController.newUser) // get user
router.get('/:id' , userController.getById) // get user by id 
router.post('/' , userController.postUser) // create user
router.put('/:id' , userController.putUser) // update user
router.delete('/:id' , userController.deleteUser) // delete user







