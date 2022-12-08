
const  express = require("express")
const router = express.Router()


const controller = require('../controller/userController')


router.get('/' , controller.getColor) // 

router.get('/:id' , controller.colorById) // 

router.post('/' , controller.postColor) // 

router.put('/:id' , controller.updateColor) // 

router.delete('/:id' , controller.deleteColor) // 

module.exports= router





