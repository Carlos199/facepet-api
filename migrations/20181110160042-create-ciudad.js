'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ciudades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      imagenUrl: {
        type: Sequelize.STRING(255),
        field: "imagen_url"
      },
      activo: {
        type: Sequelize.INTEGER(1)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ciudades');
  }
};