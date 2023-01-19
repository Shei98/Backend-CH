const express = require("express");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 8080;

http.Server.listen(8080, function(){
    console.log('Servidor corriendo en http://localhost:8080');
} )

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const messages = [
  {
    author: "Juan",
    text: "Hola que tal?",
  },
  {
    author: "Pedro",
    text: "Muy bien y vos?",
  },
  {
    author: "Ana",
    text: "Genial!!!",
  },
];

io.on("connection", (socket) => {
  console.log("usuario conectado " + socket.id);
  socket.emit("messages", messages);
  socket.on("new-message", (data) => {
    messages.push(data);
    io.emit("messages", messages);
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(socket.id);
    console.warn("chat message", msg);
    io.emit("chat message", msg);
  });
});

const server = http.listen(port, () => {
  console.log(`Escuchando app en el puerto ${server.address().port}`);
});