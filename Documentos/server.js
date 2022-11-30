// const http = require("http");
// const moment = require("moment");
const { response } = require("express");
const express = require("express");
const moment = require("moment");

const app = express();
app.get("/", (require, response) => {
  response.send({ message: "Holas" });
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening app port ${server.adress().port}`);
});
server.on("error", (error) => {
  console.log("Error", error);
});

app.get("/", (require, response) => {
  response.send('<h1 style="color: blue">Bienvenidos al servidor express</h1>');
});
let visitas = 1;
app.get("/visitas", (require, response) => {
  response.send({ message: `Cantidad de visitas es ${visitas++}` });
});
app.get("/fhy", (require, response) => {
  response.send({ fyh: moment().format("DD/MM/YYYY:hh:mm") });
});

// const server = http.createServer((require, reponse) => {
//   const currentHour = moment().get("hour");
//   let message = "Buenas Noches";

//   if (currentHour >= 6 && currentHour <= 12) {
//     message = "Buenos Días";
//   } else if (currentHour >= 13 && currentHour <= 19) {
//     message = "Buenas Tardes";
//   }

//   Response.end(JSON.stringify(message));
// });

// const connection = server.listen(3000, () => {
//   console.log(`Listening port ${connection.address().port}`);
// });
