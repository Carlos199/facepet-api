'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    correo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    clave: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    celular: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ciudadId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "ciudad_id"
    },
    activo: {
      defaultValue: 1,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    tableName: 'usuarios',
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};