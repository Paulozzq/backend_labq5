const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Producto = sequelize.define('Producto', {
   codProducto: {
       type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true
   },
   nomPro: {
       type: DataTypes.STRING,
       allowNull: false
   },
   precioProducto: {
       type: DataTypes.DECIMAL(10, 2),
       allowNull: false
   },
   stockProducto: {
       type: DataTypes.INTEGER,
       allowNull: false
   }
}, {
   tableName: 'productos',
   timestamps: false
});

module.exports = Producto;