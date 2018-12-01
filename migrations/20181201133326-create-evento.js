'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      fecha: {
        type: Sequelize.DATE
      },
      ciudadId: {
        type: Sequelize.INTEGER(10),
        field: "ciudad_id"
      },
      usuarioId: {
        type: Sequelize.INTEGER(1),
        field: "usuario_id"
      },
      nombre: {
        type: Sequelize.STRING(60)
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      latitud: {
        type: Sequelize.DECIMAL(10,6)
      },
      longitud: {
        type: Sequelize.DECIMAL(10,6)
      },
      imagenUrl: {
        type: Sequelize.TEXT,
        field: "imagen_url"
      },
      situacion: {
        type: Sequelize.INTEGER(1)
      },
      activo: {
        type: Sequelize.INTEGER(1)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('eventos');
  }
};