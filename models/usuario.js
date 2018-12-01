'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    clave: DataTypes.STRING,
    celular: DataTypes.STRING,
    ciudadId: {
      type: DataTypes.INTEGER,
      field: "ciudad_id"
    },
    activo: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'usuarios',
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};