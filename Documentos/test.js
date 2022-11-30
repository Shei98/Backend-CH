const Container = require('./segundoDesafio.js');
const products = new Container('./products.json');

async function Test() {

  const objeto1 = {
    title: "Producto 1",
    price: 100,
    thumbnail: "url"
  }

  const objeto2 = {
    title: "Producto 2",
    price: 200,
    thumbnail: "url"
  }

  const objeto3 = {
    title: "Producto 3",
    price: 300,
    thumbnail: "url"
  }

  const objeto4 = {
    title: "Producto 4",
    price: 400,
    thumbnail: "url"
  }

  await products.save(objeto4).then(data => console.log(data));
  // await products.getAll().then(data => console.log(data));
  // await products.getById(3).then(data => console.log(data));
  // await products.deleteById(4);
  // await products.deleteAll();

}

Test();