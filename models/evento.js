'use strict';
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    fecha: {
      defaultValue: new Date().toLocaleString('es-PY', {timeZone: 'America/Mexico_city'}),
      type: DataTypes.DATE
    },
    
    // defaultValue: Sequelize.fn('NOW'),
    ciudadId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "ciudad_id"
    },
    usuarioId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "usuario_id"
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    latitud: DataTypes.DECIMAL,
    longitud: DataTypes.DECIMAL,
    imagenUrl: {
      allowNull: false,
      type: DataTypes.TEXT,
      field: "imagen_url"
    },
    situacion: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    usuarioIdAdoptador: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: "usuario_id_adoptador"
    },
    activo: {
      defaultValue: 1,
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false,
    tableName: 'eventos',
  });
  Evento.associate = function(models) {
    // associations can be defined here
  };
  return Evento;
};