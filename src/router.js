const express = require("express");
const Container = require("./main");

const router = express.Router();
const contenedor = new Container("src/productos.json");

router.get("/", async (_req, res) => {
  const productos = await contenedor.getAll();
  res.send(productos);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const producto = await contenedor.getById(parseInt(id));
  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

router.post("/", async (req, res) => {
  const obj = req.body;
  const newObj = await contenedor.create(obj);
  res.send(newObj);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  const updatedProduct = await contenedor.updateById(obj, parseInt(id));
  if (updatedProduct) {
    res.send(updatedProduct);
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const ok = await contenedor.deleteById(parseInt(id));
  if (ok) {
    res.send(204);
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

module.exports = router;
