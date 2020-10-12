// Create new user_styles table

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.createTable('user_styles', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       userId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'users',
//           key: 'id'
//         },
//         allowNull: false
//       },
//       styleId: {
//         type: Sequelize.INTEGER,
//         references: {
//           model: 'crates',
//           key: 'id'
//         },
//         allowNull: false
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('user_styles');
//   }
// }
