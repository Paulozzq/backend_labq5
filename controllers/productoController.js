const Producto = require('../models/producto');

// Obtener todos los productos
exports.getAll = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un producto por ID
exports.getOne = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.codProducto);
    if (!producto) return res.status(404).json({ message: 'No encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear producto
exports.create = async (req, res) => {
  try {
    const { nomPro, precioProducto, stockProducto } = req.body;

    if (!nomPro || !precioProducto || !stockProducto) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const nuevo = await Producto.create({ nomPro, precioProducto, stockProducto });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar producto
exports.update = async (req, res) => {
  try {
    const actualizado = await Producto.update(req.body, {
      where: { codProducto: req.params.codProducto }
    });

    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar producto
exports.remove = async (req, res) => {
  try {
    const eliminado = await Producto.destroy({
      where: { codProducto: req.params.codProducto }
    });

    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.status(204).send(); // <- importante cerrar la respuesta
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
