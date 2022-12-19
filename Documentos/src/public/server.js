const express = require("express");
const Archivo = require("./conteiner");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname +'public'));
app.use("/api/productos", Archivo);

const server = app.listen(PORT, () => { 
    console.log(`listening app port ${server.address().port}`);
});

server.on("error", (error)=> {
    console.log(`Error durante la ejecucion del servidor, ${error}`);
});
