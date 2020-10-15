module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('surveyProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      styleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'styles',
          key: 'id'
        },
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('surveyProducts');
  }
}
