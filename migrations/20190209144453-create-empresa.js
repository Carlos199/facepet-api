'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      ruc: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING(30)
      },
      celular: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING(220),
        allowNull: false
      },
      imagen_url: {
        type: Sequelize.STRING(220)
      },
      horarios: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('empresas');
  }
};