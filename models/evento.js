'use strict';
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    fecha: DataTypes.DATE,
    ciudadId: {
      type: DataTypes.INTEGER,
      field: "ciudad_id"
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      field: "usuario_id"
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    imagenUrl: {
      type: DataTypes.TEXT,
      field: "imagen_url"
    },
    situacion: DataTypes.INTEGER,
    activo: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'eventos',
  });
  Evento.associate = function(models) {
    // associations can be defined here
  };
  return Evento;
};