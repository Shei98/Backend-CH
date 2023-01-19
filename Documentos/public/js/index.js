const express = require("express");

const app = express();
const PORT = 8080;

const socket = io(); 
socket.on('mi mensaje', data =>{
  alert(data)
  socket.emit('notificacion', 'Mensaje recibido exitosamente')
})


const server = app.listen(PORT, () => {
  console.log(`Servidor esta en el puerto: ${PORT}`);
});
