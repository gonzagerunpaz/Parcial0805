const express = require('express')
const { productosRuta } = require('./rutas/productosRuta')
const PORT = 3002

const app = express()

app.use(express.json())

app.use("/api/productos",productosRuta)


app.listen(PORT, ()=>{console.log(`A romperla en el puerto ${PORT}`)})

