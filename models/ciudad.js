'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ciudad = sequelize.define('Ciudad', {
    nombre: DataTypes.STRING,
    imagenUrl: {
      type: DataTypes.STRING,
      field: "imagen_url"
    },
    activo: DataTypes.INTEGER
  }, {
    tableName: "ciudades"
  });
  Ciudad.associate = function(models) {
    // associations can be defined here
  };
  return Ciudad;
};