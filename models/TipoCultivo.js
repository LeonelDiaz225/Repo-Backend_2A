const JsonManager = require("./JsonManager");
const db = new JsonManager("tipos_cultivo.json");

class TipoCultivo {
  static getAll() {
    return db.findAll();
  }

  static getById(id) {
    return db.findById(id);
  }
}

module.exports = TipoCultivo;
