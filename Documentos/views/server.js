const express = require("express");
const Archivo = require("../src/public/conteiner");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));
app.use("/api/productos", Archivo);
app.set("views", "./views");
app.set("view engine", "pug");
app.set("view engine", "ejs");

app.get("/hello", (req, res) => {
  res.render("hello pug", { mensaje: "usando PUG js" });
});

const server = app.listen(PORT, () => {
  console.log(`listening app port ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`Error durante la ejecucion del servidor, ${error}`);
});

app.get("/", function (req, res) {
  var mascots = [
    { name: "Goofy", organization: "Moby Dog" },
    { name: "Pluto", organization: "Dog Alone" },
    { name: "Bolt", organization: "Dogs in Black" },
  ];
  var tagline = "All you need in your life is an animal mascot.";

  res.render('pages/index',{
    mascots: mascots,
    tagline: tagline
  });
});

app.get('/about', function (req, res){
    res.render('pages/about');
} ); 

app.listen(8080);
console.log('8080 is the way');
