class Archivo {
  constructor(nombre) {
    this.fs = require("fs");
    this.nombre = nombre;
    this.productos = [];
  }

  getNextId() {
    return this.productos.lenght + 1;
  }

  async keep(productos) {
    this.productos = await this.read();

    productos.id = this.getNextId();
    this.productos.push(productos);

    try {
      await this.fs.promises.writeFile(
        this.nombre,
        JSON.stringify(this.productos, null, "\t")
      );
      console.log("Exitosamente guardado");
    } catch (error) {
      console.log("Error: $(error)");
    }
  }

  async read() {
    try {
      let productos = await this.fs.promises.readFile(this.nombre, "utf-8");
      return JSON.parse(productos);
    } catch (error) {
      return [];
    }
  }

  async delete() {
    try {
      await this.fs.promises.unlink(this.nombre);
      console.log("Borrado");
    } catch (error) {
      console.log("Error borrando: $(error)");
    }
  }
}

module.exports = Archivo;
