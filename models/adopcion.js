'use strict';
module.exports = (sequelize, DataTypes) => {
  const Adopcion = sequelize.define('Adopcion', {
    usuario_id: DataTypes.INTEGER,
    evento_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    celular: DataTypes.STRING,
    direccion: DataTypes.STRING,
    obs: DataTypes.STRING,
    situacion: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'adopciones',
  });
  Adopcion.associate = function(models) {
    // associations can be defined here
  };
  return Adopcion;
};