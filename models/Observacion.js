const JsonManager = require("./JsonManager");
const db = new JsonManager("observaciones.json");

class Observacion {
  static getAll() {
    // Soft delete: filtramos las que no estén eliminadas lógicamente
    return db.findAll().filter((obs) => obs.activa !== false);
  }

  static getById(id) {
    const obs = db.findById(id);
    if (obs && obs.activa !== false) return obs;
    return null;
  }

  static getByLote(idLote) {
    return this.getAll().filter((obs) => obs.id_lote === parseInt(idLote));
  }

  static getByNivelAlerta(nivel) {
    return this.getAll().filter((obs) => obs.nivel_alerta === nivel);
  }

  static create(data) {
    // Al crearse por defecto está activa
    data.activa = true;
    return db.create(data);
  }

  // Actualización no exigida explícitamente pero la dejamos disponible
  static update(id, data) {
    return db.update(id, data);
  }

  // Regla de negocio: inmutabilidad / soft delete para historial
  static delete(id) {
    return db.update(id, { activa: false });
  }
}

module.exports = Observacion;
