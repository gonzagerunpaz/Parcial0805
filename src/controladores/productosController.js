
const getProductos = (req, res)=>{
    res.status(200).json({"mensaje": "Hola mundo!!"})
}

const getProductoById = (req, res) => {
    const id = req.params.id
    res.status(200).json({"mensaje":  `Consulto el producto ${id}`})
}

module.exports = {getProductos, getProductoById}