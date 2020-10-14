module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'StyleId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Styles',
          key: 'id,'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'StyleId'
    );
  }
};
