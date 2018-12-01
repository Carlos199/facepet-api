'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      nombre: {
        type: Sequelize.STRING(50)
      },
      correo: {
        type: Sequelize.STRING(50)
      },
      clave: {
        type: Sequelize.STRING(50)
      },
      celular: {
        type: Sequelize.STRING(50)
      },
      ciudadId: {
        type: Sequelize.INTEGER(10),
        field: "ciudad_id"
      },
      activo: {
        type: Sequelize.INTEGER(1)
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};