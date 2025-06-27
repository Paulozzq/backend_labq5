const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/producto.routes');
const sequelize = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);
console.log('[INFO] Ruta cargada: /api/productos');

// Verifica conexión a DB
console.log('[INFO] Intentando sincronizar la base de datos...');

sequelize.sync()
  .then(() => {
    console.log('[SUCCESS] Base de datos sincronizada correctamente');
    app.listen(PORT, () => {
      console.log(`[SERVER] Backend corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('[ERROR] Fallo al sincronizar base de datos:', err.message);
  });
