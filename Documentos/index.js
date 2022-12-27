const express = require("express");
const classContainer = require("./contenedor.js");

const app = express();
const PORT = 8080;

const socket = io(); 
socket.on('mi mensaje', data =>{
  alert(data)
})

const archivo = new classContainer("./productos.json");

app.get("/productos", async (req, res) => {
  const productos = await archivo.read();
  res.send({ Productos: productos });
});

app.get("/random", async (req, res) => {
  const productos = await archivo.read();
  const random = parseInt(Math.random() * productos.length);
  res.send({ Productos: productos[random] });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor esta en el puerto: ${PORT}`);
});
