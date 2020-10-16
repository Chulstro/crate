'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('styles', [
      {
        id: 1,
        name: "Punk",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Sporty",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Casual",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Formal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: "Vintage",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  }
}
