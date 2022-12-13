const express = require("express");
const Archivo = require("./contenedor");

const router = express.Router();
const contenedor = new Archivo();

router.get("/", (_req, res) => {
    const productos = contenedor.getAll();
    res.send(productos);
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const producto = contenedor.getById(parseInt(id));
    res.send(producto);
})

router.post("/", (req, res) => {
    const obj = req.body;
    const newObj = contenedor.create(obj);
    res.send(newObj)
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