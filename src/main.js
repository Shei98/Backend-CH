const express = require('express')

const ProductosApi = require('../api/productos.js')
const contenedor = new ("src/productos.json");
const productosApi = new ProductosApi()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/productos', async (req, res) => {
  const obj = req.body;
  const newObj = await contenedor.create(obj);
  res.send(newObj);
})

app.get('/productos', async (_req, res) => {
  const productos = await contenedor.getAll();
  res.send(productos);
});

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const producto = await contenedor.getById(parseInt(id));
  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))