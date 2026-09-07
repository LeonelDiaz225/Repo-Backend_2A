const JsonManager = require("./JsonManager");
const db = new JsonManager("tecnicos.json");

class Tecnico {
  static getAll() {
    return db.findAll();
  }

  static getById(id) {
    return db.findById(id);
  }
}

module.exports = Tecnico;
