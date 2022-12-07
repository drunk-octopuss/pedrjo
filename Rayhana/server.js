const express = require('express')

const  app = express()
const PORT = process.env.PORT || 3000;


// middleware



app.use(express.json())

app.use('/api/user' , require('../routes/userRoutes')) // URL


app.listen(PORT, () => {
    console.log(`API server is running ${PORT}`)
})






