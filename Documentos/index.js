const express = require("express");
const classContainer = require("./desafioServidoresWeb");

const app = express();
const PORT = 8090;

const archivo = new classContainer("productos.txt");

app.get("/productos", async (require, response) => {
  const productos = await archivo.read();
  response.send({ Productos: productos });
});

app.get("/random", async (require, response) => {
    const productos = await archivo.read();
    const random = parseInt(Math.random() * productos.lenght)
  response.send({ Productos: productos[random] });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor esta en el puerto: ${PORT}`);
});
