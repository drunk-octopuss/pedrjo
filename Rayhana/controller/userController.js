const { application } = require("express")
const router = require("../routes/userRoutes")
const uuid = require('uuid')
const myUId = uuid.v4;

// colors array

let colors = [
    {
        firstColor: "Blue",
        shade: "Light"
    },
   {
     secondColor: "Black",
     shade: "D+ark"
   }
] 

// GET, display
exports.getColor= (req, res) =>{ 
    res.status(200).json({
        message: 'displaying data',
        data: colors
    })
}


// get by id
exports.colorById = (req, res) =>{
 const {id} = req.params
 const colorFound = colors.find((color) => color.id ===id)
 res.send(colorFound)    
}

// create 
exports.postColor = (req, res) =>{
    const color = req.body 
    colors.push({ ...colors, id: myUId() })             
    res.send(`color with the name ${color.shade} data added`);
 }

// update
exports.updateColor = (req, res) =>{
    const {id} = req.params
    const colorUpdated = colors.find((color) => color.id === id)
    const { firstColor, secondColor, shade} = req.body

    if(firstColor){
        colorUpdated.firstColor = firstColor
    }
    if(secondColor){
        colorUpdated.secondColor = secondColor
    }
    if(shade){
        colorUpdated.shade = shade
    }

    res.send(`color ${id} successfully updated`)
}


 // delete
exports.deleteColor = (req, res) =>{ 
    const {id} = req.params;
    colors = colors.filter((color) => color.id !== id) 
    res.send(`color by the id > ${id} < successfully deleted.`)


}