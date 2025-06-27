const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/producto.routes');
const sequelize = require('./db');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(80, () => {
      console.log('Backend corriendo en http://localhost');
    });
  })
  .catch(err => {
    console.error('Error al sincronizar base de datos:', err);
  });