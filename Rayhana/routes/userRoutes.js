const  express = require("express")
const router = express.Router()


const controller = require('../controller/userController')



router.get('/' , controller.getColor) // get color

router.get('/:id' , controller.colorById) // get color by id

router.post('/' , controller.postColor) // create color

router.put('/:id' , controller.updateColor) // update color

router.delete('/:id' , controller.deleteColor) // delete color







module.exports= router





