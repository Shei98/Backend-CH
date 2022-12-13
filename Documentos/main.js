// const obj = {};
// for (i=1; i<=10000; i++){
//     let nro = Math.ceil(Math.random()*20)
//     obj[nro] === undefined ? obj[nro] = 1 : obj[nro]++;
// }
// console.log(obj)

// const productos = [
//   { id: 1, nombre: "Escuadra", precio: 323.45 },
//   { id: 2, nombre: "Calculadora", precio: 234.56 },
//   { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
//   { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
//   { id: 5, nombre: "Reloj", precio: 67.89 },
//   { id: 6, nombre: "Agenda", precio: 78.9 },
// ];

// let a = "";
// let b = 0.0;
// productos.forEach((elemento) => {
//   a === "" ? (a = elemento.nombre) : (a += `;${elemento.nombre}`);
//   b += elemento.precio;
// });
// const c = b / productos.length;
// const d = productos.sort((a, b) => a.precio - b.precio)[0].nombre;
// const e = productos.sort((a, b) => b.precio - a.precio)[0].nombre;

// const resultado = {
//   productos: a,
//   precioTotal: b.toFixed(2),
//   precioPromedio: c.toFixed(2),
//   productoMenorPrecio: d,
//   productoMayorPrecio: e,
// };

// console.log(resultado);

const fs = require('fs')


class contenedor {
  constructor(path) {
    this.path = path;
  }

  writeFile = async data => {
    try {
      await fs.promises.writeFile(
        this.path, JSON.stringify(data, null, 2)
        )
    }catch(err) {
      console.log(err);
    }
  }

  save = async obj => {
    try {
      const products = await fs.promises.readFile(this.path, 'utf-8');
      const data = JSON.parse(products);
      let newId
      data.length === 0 ? newId = 1 : newId = data[data.length - 1].id + 1;
      const newObj = {...obj, id: newId};
      data.push(newObj);
      await this.writeFile(data)
      return newObj.id;
    }catch(err) {
      console.log(err);
    }
  }

  getById = async id => {
    try {
      const readProducts = await fs.promises.readFile(this.path, 'utf-8');
      const data = JSON.parse(readProducts);
      const obj = data.find(obj => obj.id === id);
      return obj ? obj : null;

    }catch(err) {
      console.log(err);
    }
  }

  getAll = async() => {
    try {
      const readProducts = await fs.promises.readFile(this.path, 'utf-8');
      return JSON.parse(readProducts)
    }catch(err) {
      console.log(err);
    }
  }

  deleteById = async id => {
    try {
      const readProducts = await fs.promises.readFile(this.path, 'utf-8');
      const data = JSON.parse(readProducts);
      const obj = data.filter(obj => obj.id !== id);
      await this.writeFile(obj);
    }catch(err) {
      console.log(err);
    }
  }

  deleteAll = async() => {
    try {
      this.writeFile([]);
    }catch(err) {
      console.log(err);
    }
  }

}

module.exports = contenedor;

