'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ciudad = sequelize.define('Ciudad', {
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imagenUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      field: "imagen_url"
    },
    activo: {
      defaultValue: 1,
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: false,
    tableName: "ciudades"
  });
  Ciudad.associate = function(models) {
    // associations can be defined here
  };
  return Ciudad;
};