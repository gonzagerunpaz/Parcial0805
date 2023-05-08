const express = require('express')
const PORT = 3002

const app = express()

app.get("/", (req, res)=>{
    res.status(200).json({"mensaje": "Hola mundo!!"})
})


app.listen(PORT, ()=>{console.log(`A romperla en el puerto ${PORT}`)})

