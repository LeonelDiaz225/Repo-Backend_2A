const Tecnico = require("../models/Tecnico");

exports.getAll = (req, res) => {
  try {
    const tecnicos = Tecnico.getAll();
    res.status(200).json(tecnicos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener técnicos" });
  }
};

exports.getById = (req, res) => {
  try {
    const tecnico = Tecnico.getById(req.params.id);
    if (!tecnico)
      return res.status(404).json({ error: "Técnico no encontrado" });
    res.status(200).json(tecnico);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el técnico" });
  }
};

exports.create = (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(400).json({ error: "El nombre es obligatorio" });
    }

    const nuevoTecnico = Tecnico.create({ nombre });
    res.status(201).json(nuevoTecnico);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el técnico" });
  }
};

exports.update = (req, res) => {
  try {
    const { nombre } = req.body;
    const tecnicoActualizado = Tecnico.update(req.params.id, { nombre });

    if (!tecnicoActualizado)
      return res.status(404).json({ error: "Técnico no encontrado" });
    res.status(200).json(tecnicoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el técnico" });
  }
};

exports.delete = (req, res) => {
  try {
    const eliminado = Tecnico.delete(req.params.id);
    if (!eliminado)
      return res.status(404).json({ error: "Técnico no encontrado" });
    res.status(200).json({ mensaje: "Técnico eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el técnico" });
  }
};
