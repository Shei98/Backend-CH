const express = require("express");
const app = express();
const Container = require("./container");
const PORT = 8080;

const contenedor = new Container("src/productos.json");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(__dirname + '/public'));

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get('/urlparam', (req, res) => {
  res.send(req.query);
});

app.post('urljson', (req, res) =>  {
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.render("index", { title: "PUGJS", mensaje: "Pug JS Works!!!" });
});
app.get("/productos", (req, res) => {
  res.render("productos");
});

app.post("/productos", async (req, res) => {
  const obj = req.body;
  const newObj = await contenedor.create(obj);
  res.send(newObj);
});

app.get("/index.pug", async (_req, res) => {
  const productos = await contenedor.getAll();
  res.render("index", {
    productos: productos,
    hayProductos: productos.length > 0,
  });
  // res.send(productos);
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

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
