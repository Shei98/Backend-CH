const express = require("express");
const Archivo = require("./main");

const router = express.Router();
const contenedor = new Archivo('productos.json');

router.get("/", async (_req, res) => {
    const productos = await contenedor.getAll();
    res.send(productos);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const producto = contenedor.getById(parseInt(id));
    res.send(producto);
})

router.post("/", async (req, res) => {
    try {
        const obj = req.body;
        const newObj = await contenedor.save(obj);
        res.status(201).json(newObj);
    }catch(err){
        console.log(err);
        res.status(500).json({'message':'Ha ocurrido un error'})
    }
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    const updatedProducto = contenedor.updateById(parseInt(id), obj);
    res.send(updatedProducto);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deletID = contenedor.deleteById(parseInt(id));
    res.send(deletID)
})

module.exports = router;