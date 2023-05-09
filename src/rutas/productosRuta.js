const express = require('express')
const { getProductos, getProductoById, postProducto } = require('../controladores/productosController')

const productosRuta = express.Router()

productosRuta.get("/", getProductos)
productosRuta.get("/:id", getProductoById )
productosRuta.post("/", postProducto)


module.exports = {  productosRuta  }