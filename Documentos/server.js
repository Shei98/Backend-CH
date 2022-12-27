const express = require("express");
const { Server : HttpServer } = require('http');
const { Server : IOServer } = require('socket.io');
const router = require("./router");

const PORT = 8080;
const app = express();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use("/api/productos", router);

const server = app.listen(PORT, () => { 
    console.log(`listening app port ${server.address().port}`);
});

server.on("error", (error)=> {
    console.log(`Error durante la ejecucion del servidor, ${error}`);
});
