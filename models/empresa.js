'use strict';
module.exports = (sequelize, DataTypes) => {
  const empresa = sequelize.define('empresa', {
    nombre: DataTypes.STRING,
    ruc: DataTypes.STRING,
    telefono: DataTypes.STRING,
    celular: DataTypes.STRING,
    direccion: DataTypes.STRING,
    imagenUrl: {
      type: DataTypes.STRING,
      field: "imagen_url"
    },
    horarios: DataTypes.STRING
  }, {});
  empresa.associate = function(models) {
    // associations can be defined here
  };
  return empresa;
};