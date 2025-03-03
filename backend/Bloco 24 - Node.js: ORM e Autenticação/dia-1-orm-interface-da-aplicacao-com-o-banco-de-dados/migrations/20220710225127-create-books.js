'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncremente: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER,
        field:'page_quantity',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  },
};
