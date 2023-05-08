const express = require('express')
const { getProductos, getProductoById } = require('../controladores/productosController')

const productosRuta = express.Router()

productosRuta.get("/", getProductos)
productosRuta.get("/:id", getProductoById )


module.exports = {  productosRuta  }